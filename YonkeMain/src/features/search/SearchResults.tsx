import ProductCard from '@/features/product/ProductCard';
import { Product } from '@/types';

interface SearchResultsProps {
  results: Product[];
  loading: boolean;
}

export default function SearchResults({ results, loading }: SearchResultsProps) {
  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="animate-pulse bg-neutral-900 rounded-lg h-80"></div>
        ))}
      </div>
    );
  }

  if (results.length === 0) {
    return (
      <div className="text-center py-12 text-neutral-400">
        <p className="text-xl">No se encontraron resultados para tu búsqueda.</p>
        <p className="mt-2">Intenta con otros términos o ajusta los filtros.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {results.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
