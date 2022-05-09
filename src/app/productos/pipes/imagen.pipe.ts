import { Pipe, PipeTransform } from '@angular/core';
import { Producto } from '../interfaces/producto.interface';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(producto: Producto): string {
    if (!producto.id && !producto.alt_img) {
      return 'assets/productos/no-image.png';
    } else if (producto.alt_img) {
      return producto.alt_img;
    } else {
      return `assets/productos/${producto.id}.jpg`;
    }
  }

}
