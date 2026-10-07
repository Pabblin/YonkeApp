import Hero from '@/features/home/Hero';
import Categories from '@/features/home/Categories';
import ProductCard from '@/features/product/ProductCard';
import { Product } from '@/types';
import { api } from '@/services/api';

async function getFeaturedProducts(): Promise<Product[]> {
  try {
    const products = await api.get('/productos?limit=4');
    return products.slice(0, 4); // Por si el backend no respeta el límite temporalmente
  } catch (error) {
    console.error('Error fetching featured products:', error);
    return [];
  }
}

export default async function Home() {
  const products = await getFeaturedProducts();

  return (
    <div>
      <Hero />
      <Categories />
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-white mb-8">Productos Destacados</h2>
        {products.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <p className="text-neutral-400">No hay productos destacados disponibles por el momento.</p>
        )}
      </section>
    </div>
  );
}
