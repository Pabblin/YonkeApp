import Link from 'next/link';
import { Product } from '@/types';
import { formatCurrency } from '@/lib/utils';

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/product/${product.id}`}
      className="group block bg-surface transition-transform duration-200 hover:-translate-y-1 focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-ground outline-none"
    >
      {/* Image */}
      <div className="aspect-[4/3] bg-field relative overflow-hidden">
        {product.imagen ? (
          <img
            src={product.imagen}
            alt={product.nombre}
            className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-[1.03]"
          />
        ) : (
          <div className="flex items-center justify-center w-full h-full text-ink-secondary">
            Sin imagen
          </div>
        )}
      </div>

      {/* Info */}
      <div className="p-5">
        <h3 className="text-base font-semibold text-ink mb-1 line-clamp-1">
          {product.nombre}
        </h3>
        <p className="text-sm text-ink-secondary mb-4 line-clamp-2">
          {product.descripcion}
        </p>
        <span className="text-2xl font-extrabold text-accent">
          {formatCurrency(product.precio)}
        </span>
      </div>
    </Link>
  );
}
