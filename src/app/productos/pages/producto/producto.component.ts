import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { ProductosService } from 'src/app/services/productos.service';
import { Producto } from '../../interfaces/producto.interface';
import Swal from 'sweetalert2';
import { UpdateCartService } from 'src/app/services/update-cart.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css'],
})
export class ProductoComponent implements OnInit {
  producto: Producto = {
    familia: '',
    serie: '',
    modelo: '',
    nombre: '',
    descripcion: '',
    color: '',
    precio: 0,
    talla: '',
    stock: 0,
    alt_img: '',
  };

  titulo: string = "Detalles";

  constructor(
    private _productoService: ProductosService,
    private _activedRoute: ActivatedRoute,
    private _router: Router,
    private _updateCartService: UpdateCartService
  ) {}

  ngOnInit(): void {
    if (!this._router.url.includes('detalle')) {
      return;
    }
    this._activedRoute.params
      .pipe(switchMap(({ id }) => this._productoService.getProduct(id)))
      .subscribe((producto) => {
        this.producto = producto;
      });
  }

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
