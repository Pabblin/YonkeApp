"use client";

import SearchBar from '@/features/search/SearchBar';
import Filters from '@/features/search/Filters';
import SearchResults from '@/features/search/SearchResults';
import { useSearch } from '@/hooks/useSearch';
import { Suspense } from 'react';

function SearchContent() {
  const { query, setQuery, results, loading } = useSearch();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col items-center mb-8">
        <h1 className="text-3xl font-bold text-white mb-6">Búsqueda de Autopartes</h1>
        <SearchBar value={query} onChange={(e) => setQuery(e.target.value)} />
      </div>
      
      <div className="flex flex-col md:flex-row gap-8">
        <aside className="w-full md:w-64 flex-shrink-0">
          <Filters />
        </aside>
        <main className="flex-grow">
          <SearchResults results={results} loading={loading} />
        </main>
      </div>
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={<div className="p-8 text-center text-white">Cargando buscador...</div>}>
      <SearchContent />
    </Suspense>
  );
}
