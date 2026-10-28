export default function Filters() {
  return (
    <div className="bg-surface p-5 space-y-8">
      <div>
        <h3 className="text-base font-semibold text-ink mb-4">Categorías</h3>
        <ul className="space-y-3">
          {['Motor', 'Transmisión', 'Suspensión', 'Eléctrico', 'Interiores', 'Carrocería'].map((cat) => (
            <li key={cat} className="flex items-center">
              <input
                type="checkbox"
                className="h-4 w-4 accent-accent bg-field border-none"
              />
              <label className="ml-3 text-sm text-ink-secondary">{cat}</label>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="text-base font-semibold text-ink mb-4">Rango de Precio</h3>
        <div className="flex items-center gap-3">
          <input
            type="number"
            placeholder="Min"
            className="w-full bg-field text-ink placeholder-ink-secondary px-3 py-2 text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          />
          <span className="text-ink-secondary">–</span>
          <input
            type="number"
            placeholder="Max"
            className="w-full bg-field text-ink placeholder-ink-secondary px-3 py-2 text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          />
        </div>
      </div>
    </div>
  );
}
