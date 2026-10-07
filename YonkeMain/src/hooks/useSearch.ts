import { useState, useEffect } from 'react';
import { api } from '@/services/api';
import { Product } from '@/types';
import { useDebounce } from './useDebounce';

export function useSearch(initialQuery: string = '') {
  const [query, setQuery] = useState(initialQuery);
  const [results, setResults] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const debouncedQuery = useDebounce(query, 500);

  useEffect(() => {
    if (!debouncedQuery) {
      setResults([]);
      return;
    }
    const search = async () => {
      setLoading(true);
      try {
        const data = await api.get(`/productos/buscar?q=${debouncedQuery}`);
        setResults(data);
      } catch (e) {
        console.error(e);
        setResults([]);
      } finally {
        setLoading(false);
      }
    };
    search();
  }, [debouncedQuery]);

  return { query, setQuery, results, loading };
}
