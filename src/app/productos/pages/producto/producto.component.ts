import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { ProductosService } from 'src/app/services/productos.service';
import { Producto } from '../../interfaces/producto.interface';
import Swal from 'sweetalert2';

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

  titleProd: string = `Detalles del producto`

  constructor(
    private _productoService: ProductosService,
    private _activedRoute: ActivatedRoute,
    private _router: Router
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
    this._productoService
      .addArticleToCart(producto)
      .subscribe((datos: any) => {
        if (datos['resultado']==='OK') {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Producto añadido al carrito',
            showConfirmButton: false,
            timer: 1500
          })
        }
      });
    
  }
}
