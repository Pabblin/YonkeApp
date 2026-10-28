import Link from 'next/link';
import Reveal from '@/components/Reveal';

const categories = [
  { name: 'Motor', href: '/search?category=motor' },
  { name: 'Transmisión', href: '/search?category=transmision' },
  { name: 'Suspensión', href: '/search?category=suspension' },
  { name: 'Eléctrico', href: '/search?category=electrico' },
  { name: 'Interiores', href: '/search?category=interiores' },
  { name: 'Carrocería', href: '/search?category=carroceria' },
];

export default function Categories() {
  return (
    <section className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <h2 className="text-3xl font-extrabold text-ink mb-10 tracking-display">
            Explorar por categoría
          </h2>
        </Reveal>
        <Reveal delay={80}>
          <div className="flex flex-wrap gap-x-10 gap-y-4">
            {categories.map((category) => (
              <Link
                key={category.name}
                href={category.href}
                className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-ink-secondary hover:text-accent transition-colors duration-150 tracking-display"
              >
                {category.name}
              </Link>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
