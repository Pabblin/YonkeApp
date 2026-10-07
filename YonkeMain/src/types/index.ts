export interface Product {
  id: string | number;
  nombre: string;
  descripcion: string;
  precio: number;
  categoria: string;
  imagen?: string;
  stock: number;
  vehiculo_modelo?: string;
  año?: number;
}
