interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

import React from 'react';

export default function SearchInput({
  value,
  onChange,
  placeholder
}: SearchInputProps): React.ReactElement {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder ?? 'Buscar...'}
      className="w-full rounded-lg border-2 border-green-900 bg-transparent text-lg font-bold text-white placeholder:text-green-200 focus:outline-none focus:ring-2 focus:ring-green-700"
      aria-label="Buscar na galeria"
    />
  );
}
