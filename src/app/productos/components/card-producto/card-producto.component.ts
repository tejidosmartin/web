import { Component, Input, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/services/productos.service';
import Swal from 'sweetalert2';
import { Producto } from '../../interfaces/producto.interface';

@Component({
  selector: 'app-card-producto',
  templateUrl: './card-producto.component.html',
  styleUrls: ['./card-producto.component.css'],
})
export class CardProductoComponent implements OnInit {
  @Input() producto!: Producto;

  constructor(private _productoService: ProductosService) {}

  ngOnInit(): void {}

  addToCarrito(producto: Producto) {
    this._productoService.addArticleToCart(producto).subscribe((datos: any) => {
      console.log(datos);
      
      if (datos['resultado'] === 'OK') {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Producto añadido al carrito',
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  }
}
