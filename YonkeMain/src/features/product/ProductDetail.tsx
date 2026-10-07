import { Product } from '@/types';
import { formatCurrency } from '@/lib/utils';
import Button from '@/components/Button';
import { ShieldCheck } from 'lucide-react';

export default function ProductDetail({ product }: { product: Product }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-neutral-900 rounded-xl p-8 border border-neutral-800">
      <div className="aspect-square bg-neutral-800 rounded-lg overflow-hidden relative">
        {product.imagen ? (
          <img src={product.imagen} alt={product.nombre} className="object-cover w-full h-full" />
        ) : (
          <div className="flex items-center justify-center w-full h-full text-neutral-500 text-xl">
            Sin imagen
          </div>
        )}
      </div>
      
      <div className="flex flex-col">
        <div className="mb-2">
          <span className="inline-block px-3 py-1 bg-neutral-800 text-primary text-sm font-medium rounded-full mb-4">
            {product.categoria}
          </span>
          <h1 className="text-3xl font-extrabold text-white mb-2">{product.nombre}</h1>
          <p className="text-neutral-400 text-lg mb-6">{product.descripcion}</p>
        </div>
        
        <div className="mb-8">
          <span className="text-4xl font-bold text-primary">{formatCurrency(product.precio)}</span>
          <span className="ml-2 text-neutral-500">MXN</span>
        </div>
        
        <div className="space-y-4 mb-8 text-neutral-300">
          <div className="flex items-center">
            <ShieldCheck className="h-5 w-5 text-green-500 mr-3" />
            <span>Garantía de funcionamiento de 30 días</span>
          </div>
        </div>

        <div className="mt-auto pt-6 border-t border-neutral-800">

          <p className="text-center text-sm text-neutral-500 mt-4">
            Stock disponible: {product.stock} unidades
          </p>
        </div>
      </div>
    </div>
  );
}
