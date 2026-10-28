import { Product } from '@/types';
import { formatCurrency } from '@/lib/utils';

export default function ProductDetail({ product }: { product: Product }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
      {/* Image — 60% width */}
      <div className="lg:col-span-3 aspect-square bg-field overflow-hidden">
        {product.imagen ? (
          <img
            src={product.imagen}
            alt={product.nombre}
            className="object-cover w-full h-full"
          />
        ) : (
          <div className="flex items-center justify-center w-full h-full text-ink-secondary text-xl">
            Sin imagen
          </div>
        )}
      </div>

      {/* Info — 40% width */}
      <div className="lg:col-span-2 flex flex-col">
        <p className="text-sm text-ink-secondary mb-3">{product.categoria}</p>

        <h1 className="text-4xl font-extrabold text-ink tracking-display leading-display mb-4">
          {product.nombre}
        </h1>

        <p className="text-ink-secondary text-lg leading-relaxed mb-8">
          {product.descripcion}
        </p>

        {/* Price — dominant */}
        <div className="mb-10">
          <span className="text-5xl font-extrabold text-accent tracking-display">
            {formatCurrency(product.precio)}
          </span>
          <span className="ml-3 text-ink-secondary">MXN</span>
        </div>

        {/* Trust */}
        <div className="mb-8 text-ink-secondary">
          <p>Garantía de funcionamiento de 30 días</p>
        </div>

        {/* Stock */}
        <div className="mt-auto pt-8">
          <p className="text-sm text-ink-secondary">
            Stock disponible: {product.stock} unidades
          </p>
        </div>
      </div>
    </div>
  );
}
