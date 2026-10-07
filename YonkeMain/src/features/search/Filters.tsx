export default function Filters() {
  return (
    <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-4 space-y-6">
      <div>
        <h3 className="text-lg font-medium text-white mb-3">Categorías</h3>
        <ul className="space-y-2">
          {['Motor', 'Transmisión', 'Suspensión', 'Eléctrico', 'Interiores', 'Carrocería'].map((cat) => (
            <li key={cat} className="flex items-center">
              <input type="checkbox" className="h-4 w-4 text-primary bg-neutral-800 border-neutral-700 rounded focus:ring-primary focus:ring-offset-neutral-900" />
              <label className="ml-2 text-sm text-neutral-300">{cat}</label>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="text-lg font-medium text-white mb-3">Rango de Precio</h3>
        <div className="flex items-center space-x-2">
          <input type="number" placeholder="Min" className="w-full bg-neutral-800 border border-neutral-700 rounded px-2 py-1 text-sm text-white" />
          <span className="text-neutral-500">-</span>
          <input type="number" placeholder="Max" className="w-full bg-neutral-800 border border-neutral-700 rounded px-2 py-1 text-sm text-white" />
        </div>
      </div>
    </div>
  );
}
