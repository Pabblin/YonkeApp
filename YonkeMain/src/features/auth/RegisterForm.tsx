"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Input from '@/components/Input';
import Button from '@/components/Button';

export default function RegisterForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    email: '',
    contrasena: '', // ✔ backend correcto
    usuario: '',
    calle: '',
    numero: '',
    colonia: '',
    codigo_postal: '',
    ciudad: '',
    estado: '',
    referencia: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('http://localhost:3001/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },

        body: JSON.stringify(formData),
      });

      const data = await response.json();

      console.log('STATUS:', response.status);
      console.log('BACKEND RESPONSE:', data);

      if (!response.ok) {
        throw new Error(
          data.error || data.detail || 'Error al crear la cuenta'
        );
      }

      alert("¡Cuenta creada con éxito!");
      router.push('/auth/login');

    } catch (err: any) {
      console.error(err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-surface p-8 sm:p-10 w-full max-w-3xl mx-auto">

      <div className="mb-10">
        <h2 className="text-3xl font-bold text-ink tracking-display leading-display">
          Registro de YONQUE
        </h2>
        <p className="text-ink-secondary mt-3">
          Crea una cuenta para ofrecer tus autopartes
        </p>
      </div>

      {error && (
        <div className="mb-6 p-4 bg-accent-soft text-accent text-sm">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-10">

        {/* Datos de Cuenta */}
        <section>
          <h3 className="text-lg font-semibold text-accent mb-6">
            Datos de la Cuenta
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Usuario */}
            <div>
              <label className="block text-sm font-medium text-ink-secondary mb-2">
                Usuario
              </label>
              <Input
                name="usuario"
                type="text"
                value={formData.usuario}
                onChange={handleChange}
                required
                disabled={loading}
              />
            </div>

            {/* Correo */}
            <div>
              <label className="block text-sm font-medium text-ink-secondary mb-2">
                Correo Electrónico
              </label>
              <Input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                disabled={loading}
              />
            </div>

            {/* CONTRASEÑA (FIX IMPORTANTE) */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-ink-secondary mb-2">
                Contraseña
              </label>
              <Input
                name="contrasena"   // ✔ FIX AQUÍ (antes estaba "contraseña")
                type="password"
                value={formData.contrasena}
                onChange={handleChange}
                required
                disabled={loading}
              />
            </div>

          </div>
        </section>

        {/* Ubicación (SIN CAMBIOS) */}
        <section>
          <h3 className="text-lg font-semibold text-accent mb-6">
            Ubicación del Yonque
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <div className="md:col-span-2 flex gap-4">

              <div className="flex-grow">
                <label className="block text-sm font-medium text-ink-secondary mb-2">
                  Calle
                </label>
                <Input
                  name="calle"
                  type="text"
                  value={formData.calle}
                  onChange={handleChange}
                  required
                  disabled={loading}
                />
              </div>

              <div className="w-32 flex-shrink-0">
                <label className="block text-sm font-medium text-ink-secondary mb-2">
                  Número
                </label>
                <Input
                  name="numero"
                  type="text"
                  value={formData.numero}
                  onChange={handleChange}
                  required
                  disabled={loading}
                />
              </div>

            </div>

            <div>
              <label className="block text-sm font-medium text-ink-secondary mb-2">
                Colonia
              </label>
              <Input
                name="colonia"
                type="text"
                value={formData.colonia}
                onChange={handleChange}
                required
                disabled={loading}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-ink-secondary mb-2">
                Código Postal
              </label>
              <Input
                name="codigo_postal"
                type="text"
                value={formData.codigo_postal}
                onChange={handleChange}
                required
                disabled={loading}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-ink-secondary mb-2">
                Ciudad
              </label>
              <Input
                name="ciudad"
                type="text"
                value={formData.ciudad}
                onChange={handleChange}
                required
                disabled={loading}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-ink-secondary mb-2">
                Estado
              </label>
              <Input
                name="estado"
                type="text"
                value={formData.estado}
                onChange={handleChange}
                required
                disabled={loading}
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-ink-secondary mb-2">
                Referencia
              </label>
              <Input
                name="referencia"
                type="text"
                value={formData.referencia}
                onChange={handleChange}
                disabled={loading}
              />
            </div>

          </div>
        </section>

        <Button
          type="submit"
          className="w-full text-lg py-3 mt-4"
          disabled={loading}
        >
          {loading ? 'Creando cuenta...' : 'Crear Cuenta de Yonque'}
        </Button>
      </form>

      <div className="mt-8 text-center text-sm text-ink-secondary">
        ¿Ya tienes una cuenta?{' '}
        <Link href="/auth/login" className="text-accent hover:text-accent-hover font-medium">
          Inicia sesión aquí
        </Link>
      </div>
    </div>
  );
}