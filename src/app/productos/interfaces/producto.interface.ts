import { Proveedor } from "./proveedor.interface";

export interface Producto{
    codigo?: number,
    familia: string,
    serie: string,
    modelo: string,
    ufc: string,
    ufv: string,
    proveedor: Proveedor,
    color: Array<string>
    talla: Array<string>
    compras?: number,
    ventas?: number,
    stock?: number,
    alt_img?: string
}