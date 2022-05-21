import { Location } from '@angular/common';
import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { catchError, filter, map, of, switchMap, tap } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Producto } from 'src/app/productos/interfaces/producto.interface';
import { ProductosService } from 'src/app/services/productos.service';
import { UpdateCartService } from 'src/app/services/update-cart.service';
import { ConfirmComponent } from 'src/app/shared/confirm/confirm.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css'],
})
export class CarritoComponent implements OnInit {
  productos: Producto[] = [];
  errorMsg!: string;
  titulo: string = 'Carrito';

  public totalItem: number = 0;

  get usuario() {
    return this._authService.usuario;
  }

  constructor(
    private _router: Router,
    private _authService: AuthService,
    private _productoService: ProductosService,
    private _location: Location,
    private _dialog: MatDialog,
    private _updateCartService: UpdateCartService
  ) {}

  ngOnInit(): void {
    this._productoService
      .getProductsFromCady()
      .pipe(
        map((productos) => {
          return productos.reduce((a: Producto[], next: Producto) => {
            const val = a.find((el) => el.id === next.id);
            if (val) {
              val.cantidad!++;
            } else {
              next.cantidad = 1;
              a.push(next);
            }
            return a;
          }, [] as Producto[]);
        })
      )
      .subscribe((next) => {
        this.productos = next;
      });

    this._updateCartService.setUpdatedCart$(this.productos);
  }

  eliminar(producto: Producto) {

    this._productoService
      .removeArticleToCart(producto)
      .pipe(
        
        tap(() =>
          this._router
            .navigateByUrl('/refresh', { skipLocationChange: true })
            .then(() => {
              this._router.navigate([decodeURI(this._location.path())]);
            })
        )
      )
      .subscribe((datos: any) => {
        console.log(datos);
        
        if (datos['ok'] === 'true') {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Producto eliminado del carrito',
            showConfirmButton: false,
            timer: 1500,
          });
        } else {
          Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Ocurrio un error a la hora de eliminar el producto',
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
      this._updateCartService.setUpdatedCart$(this.productos)
  }
}
