import Link from 'next/link';
import { Product } from '@/types';
import { formatCurrency } from '@/lib/utils';
import Button from '@/components/Button';

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="bg-neutral-900 border border-neutral-800 rounded-lg overflow-hidden flex flex-col hover:border-primary transition-colors duration-300">
      <div className="aspect-video bg-neutral-800 relative">
        {product.imagen ? (
          <img src={product.imagen} alt={product.nombre} className="object-cover w-full h-full" />
        ) : (
          <div className="flex items-center justify-center w-full h-full text-neutral-500">
            Sin imagen
          </div>
        )}
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold text-white mb-1 line-clamp-1">{product.nombre}</h3>
        <p className="text-sm text-neutral-400 mb-2 line-clamp-2">{product.descripcion}</p>
        <div className="mt-auto flex items-center justify-between">
          <span className="text-xl font-bold text-primary">{formatCurrency(product.precio)}</span>
          <Link href={`/product/${product.id}`}>
            <Button variant="secondary" className="text-sm px-3 py-1.5">Ver detalles</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
