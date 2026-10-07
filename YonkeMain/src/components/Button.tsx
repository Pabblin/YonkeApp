import React from 'react';
import { classNames } from '@/lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
}

export default function Button({ className, variant = 'primary', ...props }: ButtonProps) {
  const baseStyle = "px-4 py-2 rounded-md font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-neutral-900 focus:ring-primary";
  const variants = {
    primary: "bg-primary text-white hover:bg-red-600",
    secondary: "bg-neutral-800 text-white hover:bg-neutral-700",
    outline: "border border-neutral-700 text-neutral-300 hover:bg-neutral-800"
  };
  
  return (
    <button className={classNames(baseStyle, variants[variant], className)} {...props} />
  );
}
