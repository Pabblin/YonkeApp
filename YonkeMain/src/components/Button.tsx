import React from 'react';
import { classNames } from '@/lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
}

export default function Button({ className, variant = 'primary', ...props }: ButtonProps) {
  const baseStyle =
    "px-5 py-2.5 font-medium transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-ground disabled:opacity-50 disabled:cursor-not-allowed";
  const variants = {
    primary: "bg-accent text-white hover:bg-accent-hover",
    secondary: "bg-surface text-ink hover:bg-field",
    outline: "bg-transparent text-ink-secondary hover:text-ink",
  };

  return (
    <button
      className={classNames(baseStyle, variants[variant], className)}
      {...props}
    />
  );
}
