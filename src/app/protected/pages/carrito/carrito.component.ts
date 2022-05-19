import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { catchError, filter, map, of, switchMap, tap } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Producto } from 'src/app/productos/interfaces/producto.interface';
import { ProductosService } from 'src/app/services/productos.service';
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
    private _productosService: ProductosService,
    private _location: Location,
    private _dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this._productosService
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
  }

  logout() {
    this._router.navigateByUrl('/');
    this._authService.logout();
  }

  eliminar(producto: Producto) {
    /* const dialog = this._dialog.open(ConfirmComponent, {
      width: '340px',
      data: { ...producto },
    });
    dialog
      .afterClosed()
      .pipe(
        filter(() => !!producto),
        switchMap(() => {
          return this._productosService.removeArticleToCart(producto.id!).pipe(
            tap(() =>
              this._router
                .navigateByUrl('/', { skipLocationChange: true })
                .then(() => {
                  this._router.navigate([currentUrl]);
                  console.log(currentUrl);
                })
            )
          );
        })
      )
      .subscribe((datos: any) => {
        console.log(datos);

        if (datos['resultado'] === 'OK') {
          alert(datos['mensaje']);
        } else {
          console.log(datos);
        }
      }); */

    this._productosService
      .removeArticleToCart(producto.id!)
      .pipe(
        catchError((error) => {
          if (error.error instanceof ErrorEvent) {
            this.errorMsg = `Error: ${error.error.message}`;
          } else {
            this.errorMsg = `Error: ${error.message}`;
          }
          return of([]);
        }),
        tap(() =>
        this._router
        .navigateByUrl('/refresh', { skipLocationChange: true })
        .then(() => {
          this._router.navigate([decodeURI(this._location.path())]);
        })
        )
      )
      .subscribe((datos: any) => {

        if (datos['resultado'] === 'OK') {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Producto eliminado del carrito',
            showConfirmButton: false,
            timer: 1500,
          });
        } else {
        }
      });
  }
}
