import { Component, Input, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/services/productos.service';
import { UpdateCartService } from 'src/app/services/update-cart.service';
import Swal from 'sweetalert2';
import { Producto } from '../../interfaces/producto.interface';

@Component({
  selector: 'app-card-producto',
  templateUrl: './card-producto.component.html',
  styleUrls: ['./card-producto.component.css'],
})
export class CardProductoComponent implements OnInit {
  @Input() producto!: Producto;

  constructor(
    private _productoService: ProductosService,
    private _updateCartService: UpdateCartService
  ) {}

  ngOnInit(): void {}

  addToCarrito(producto: Producto) {
    this._productoService.addArticleToCart(producto).subscribe((datos: any) => {

      this._updateCartService.setUpdatedCart$(producto);

      if (datos['ok'] === 'true') {
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
