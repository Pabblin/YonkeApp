import React from 'react';
import { Search } from 'lucide-react';
import Input from '@/components/Input';

interface SearchBarProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="relative max-w-2xl w-full">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <Search className="h-5 w-5 text-neutral-400" />
      </div>
      <Input
        type="text"
        placeholder="Buscar por pieza, marca, modelo o año..."
        className="pl-10 py-3 text-lg"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
