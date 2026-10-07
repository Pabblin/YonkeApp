import ProductDetail from '@/features/product/ProductDetail';
import { api } from '@/services/api';
import { Product } from '@/types';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';

async function getProduct(id: string): Promise<Product | null> {
  try {
    const product = await api.get(`/productos/${id}`);
    return product;
  } catch (error) {
    console.error('Error fetching product:', error);
    return null;
  }
}

export default async function ProductPage({ params }: { params: { id: string } }) {
  const product = await getProduct(params.id);

  if (!product) {
    return (
      <div className="min-h-[50vh] flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-3xl font-bold text-white mb-4">Producto no encontrado</h1>
        <p className="text-neutral-400 mb-8">El producto que buscas no existe o ha sido removido.</p>
        <Link href="/search" className="text-primary hover:underline flex items-center">
          <ChevronLeft className="h-4 w-4 mr-1" /> Volver a buscar
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <Link href="/search" className="text-neutral-400 hover:text-white flex items-center w-fit">
          <ChevronLeft className="h-5 w-5 mr-1" /> Volver a resultados
        </Link>
      </div>
      <ProductDetail product={product} />
    </div>
  );
}
