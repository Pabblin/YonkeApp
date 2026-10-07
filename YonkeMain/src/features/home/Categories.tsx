import Link from 'next/link';
import { Settings, Droplet, Zap, Car } from 'lucide-react';

const categories = [
  { name: 'Motor', icon: Settings, href: '/search?category=motor' },
  { name: 'Transmisión', icon: Car, href: '/search?category=transmision' },
  { name: 'Suspensión', icon: Droplet, href: '/search?category=suspension' },
  { name: 'Eléctrico', icon: Zap, href: '/search?category=electrico' },
];

export default function Categories() {
  return (
    <section className="py-12 bg-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-extrabold text-white mb-8 text-center">Explorar por Categoría</h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {categories.map((category) => (
            <Link key={category.name} href={category.href} className="flex flex-col items-center p-6 bg-neutral-800 rounded-lg border border-neutral-700 hover:border-primary transition-colors">
              <category.icon className="h-10 w-10 text-primary mb-3" />
              <span className="text-white font-medium">{category.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
