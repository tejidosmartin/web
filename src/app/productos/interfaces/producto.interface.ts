import { Proveedor } from './proveedor.interface';

export interface Producto {
  id?: string;
  familia: string;
  serie: string;
  modelo: string;
  nombre: string;
  descripcion: string;
  color: string;
  precio: number;
  talla: string;
  stock: number;
  alt_img?: string;
  cantidad?: number;
}
