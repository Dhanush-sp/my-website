import { useState, useEffect, useCallback, useRef } from 'react';
import { parseContentTxt, FALLBACK_RAW_CONTENT } from '../lib/contentParser';
import { ParsedLandingContent } from '../types';

export interface DecoupledContentState {
  data: ParsedLandingContent;
  rawContent: string;
  isLoading: boolean;
  lastFetchedAt: Date | null;
  lastUpdatedTimestamp: number;
  syncStatus: 'synced' | 'fetching' | 'error' | 'local_override';
  refreshNow: () => Promise<void>;
  updateLocalPreviewContent: (newRawText: string) => void;
}

export function useDecoupledContent(): DecoupledContentState {
  const [rawContent, setRawContent] = useState<string>(FALLBACK_RAW_CONTENT);
  const [data, setData] = useState<ParsedLandingContent>(() => parseContentTxt(FALLBACK_RAW_CONTENT));
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [lastFetchedAt, setLastFetchedAt] = useState<Date | null>(null);
  const [syncStatus, setSyncStatus] = useState<'synced' | 'fetching' | 'error' | 'local_override'>('fetching');

  // Ref to hold current raw string to avoid stale closures in interval
  const currentRawRef = useRef<string>(FALLBACK_RAW_CONTENT);
  const isOverrideRef = useRef<boolean>(false);

  const fetchContentTxt = useCallback(async (isInitial = false) => {
    if (isOverrideRef.current) return; // Don't overwrite if user is actively using the live preview editor

    if (isInitial) {
      setIsLoading(true);
    } else {
      setSyncStatus('fetching');
    }

    try {
      const timestamp = Date.now();
      const response = await fetch(`/content.txt?t=${timestamp}`, {
        cache: 'no-store',
        headers: {
          'Pragma': 'no-cache',
          'Cache-Control': 'no-cache'
        }
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch content.txt: ${response.statusText}`);
      }

      const text = await response.text();
      setLastFetchedAt(new Date());

      // Only update state if the returned text differs from currently loaded text
      if (text !== currentRawRef.current) {
        currentRawRef.current = text;
        setRawContent(text);
        setData(parseContentTxt(text));
      }
      setSyncStatus('synced');
    } catch (err) {
      console.warn('Decoupled Content Engine: Could not fetch /content.txt, falling back to cached/embedded content.', err);
      if (isInitial && !currentRawRef.current) {
        currentRawRef.current = FALLBACK_RAW_CONTENT;
        setRawContent(FALLBACK_RAW_CONTENT);
        setData(parseContentTxt(FALLBACK_RAW_CONTENT));
      }
      setSyncStatus('error');
    } finally {
      if (isInitial) {
        setIsLoading(false);
      }
    }
  }, []);

  // 1. Initial mount fetch + Interval polling (every 4.5 seconds)
  useEffect(() => {
    fetchContentTxt(true);

    const intervalId = setInterval(() => {
      fetchContentTxt(false);
    }, 4500);

    return () => clearInterval(intervalId);
  }, [fetchContentTxt]);

  // 2. Window focus / visibilitychange listener
  useEffect(() => {
    const handleFocusOrVisibility = () => {
      if (document.visibilityState === 'visible') {
        fetchContentTxt(false);
      }
    };

    window.addEventListener('focus', handleFocusOrVisibility);
    document.addEventListener('visibilitychange', handleFocusOrVisibility);

    return () => {
      window.removeEventListener('focus', handleFocusOrVisibility);
      document.removeEventListener('visibilitychange', handleFocusOrVisibility);
    };
  }, [fetchContentTxt]);

  // Allow manual quick refresh
  const refreshNow = useCallback(async () => {
    isOverrideRef.current = false;
    await fetchContentTxt(false);
  }, [fetchContentTxt]);

  // Allow live preview editor adjustments
  const updateLocalPreviewContent = useCallback((newRawText: string) => {
    isOverrideRef.current = true;
    currentRawRef.current = newRawText;
    setRawContent(newRawText);
    setData(parseContentTxt(newRawText));
    setSyncStatus('local_override');
  }, []);

  return {
    data,
    rawContent,
    isLoading,
    lastFetchedAt,
    lastUpdatedTimestamp: lastFetchedAt ? lastFetchedAt.getTime() : Date.now(),
    syncStatus,
    refreshNow,
    updateLocalPreviewContent,
  };
}
