import React from 'react';
import { classNames } from '@/lib/utils';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export default function Input({ className, ...props }: InputProps) {
  return (
    <input 
      className={classNames(
        "w-full bg-neutral-800 border border-neutral-700 rounded-md px-4 py-2 text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent",
        className
      )} 
      {...props} 
    />
  );
}
