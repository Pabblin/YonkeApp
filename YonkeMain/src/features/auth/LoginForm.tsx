"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Input from '@/components/Input';
import Button from '@/components/Button';
import { useRouter } from 'next/navigation';

export default function LoginForm() {
  const [usuario, setUsuario] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('http://localhost:3001/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },

        body: JSON.stringify({
          usuario,
          contrasena
        }),
      });

      const data = await response.json();

      // 🔥 DEBUG IMPORTANTE (temporal)
      console.log('LOGIN RESPONSE:', data);

      if (!response.ok) {
        throw new Error(data.error || data.detail || 'Error al iniciar sesión');
      }

      // Guardar usuario logueado
      localStorage.setItem('user', JSON.stringify(data.user));

      router.push('/dashboard');

    } catch (err: any) {
      console.error('LOGIN ERROR:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-neutral-900 border border-neutral-800 p-8 rounded-xl w-full max-w-md mx-auto">

      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-white">Inicio de Sesión YONQUE</h2>
        <p className="text-neutral-400 mt-2">
          Ingresa tus credenciales
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">

        {error && (
          <div className="bg-red-500/10 border border-red-500 text-red-500 p-3 rounded-lg text-sm text-center">
            {error}
          </div>
        )}

        <div>
          <label className="block text-sm font-medium text-neutral-300 mb-2">
            Usuario
          </label>

          <Input
            type="text"
            placeholder="Usuario"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
            required
            disabled={loading}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-neutral-300 mb-2">
            Contraseña
          </label>

          <Input
            type="password"
            placeholder="••••••••"
            value={contrasena}
            onChange={(e) => setContrasena(e.target.value)}
            required
            disabled={loading}
          />
        </div>

        <Button
          type="submit"
          className="w-full text-lg py-3"
          disabled={loading}
        >
          {loading ? 'Cargando...' : 'Iniciar Sesión'}
        </Button>
      </form>

      <div className="mt-6 text-center text-sm text-neutral-400">
        ¿No tienes cuenta?{' '}
        <Link href="/auth/register" className="text-primary hover:underline font-medium">
          Regístrate aquí
        </Link>
      </div>
    </div>
  );
}