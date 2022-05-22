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
import { UpdateService } from '../../services/update.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css'],
})
export class CarritoComponent implements OnInit {
  productos: Producto[] = [];
  errorMsg!: string;
  titulo: string = 'Carrito';
  total: number = 0;

  paymentHandler: any = null;
  stripeAPIKey: any =
    'pk_test_51L2FcxLGmgrGzDkTYu1WZDVN7NPtcUtFhQ6QjRpzJpONpjO0LbxzBHO8IGW8atuxOAKm4PlmJIhLwMikvmA5E8At00cj1yaQCo';

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
    private _updateCartService: UpdateCartService,
    private _update: UpdateService
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
        this.productos.forEach((object) => {
          this.total += object.cantidad! * object.precio!;
        });
      });

    this._updateCartService.setUpdatedCart$(this.productos);
    this.invokeStripe();
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
    this._updateCartService.setUpdatedCart$(this.productos);
  }

  makePayment(amount: any) {
    const paymentHandler = (<any>window).StripeCheckout.configure({
      key: this.stripeAPIKey,
      locale: 'auto',
      token: function (stripeToken: any) {
        if (stripeToken.id) {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Pago realizado con exito',
            showConfirmButton: false,
            timer: 1500,
          });
        } else {
          Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Ha habido un error a la hora de efectuar su pago',
            showConfirmButton: false,
            timer: 2000,
          });
        }
      },
    });
    paymentHandler.open({
      name: 'tejidosmartin.com',
      description: '3 widgets',
      amount: amount * 100,
    });
  }

  invokeStripe() {
    if (!window.document.getElementById('stripe-script')) {
      const script = window.document.createElement('script');

      script.id = 'stripe-script';
      script.type = 'text/javascript';
      script.src = 'https://checkout.stripe.com/checkout.js';
      script.onload = () => {
        this.paymentHandler = (<any>window).StripeCheckout.configure({
          key: this.stripeAPIKey,
          locale: 'auto',
          token: function (stripeToken: any) {
            if (stripeToken.id) {
              Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Pago realizado con exito',
                showConfirmButton: false,
                timer: 1500,
              });
            } else {
              Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Ha habido un error a la hora de efectuar su pago',
                showConfirmButton: false,
                timer: 2000,
              });
            }
          },
        });
      };

      window.document.body.appendChild(script);
    }
  }

  /*   finishBuy() {
    
    this._router.navigate(['/carrito/finalizar-compra']);
  } */
}
