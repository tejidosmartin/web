import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Producto } from 'src/app/productos/interfaces/producto.interface';
import { ProductosService } from 'src/app/services/productos.service';
import { UpdateCartService } from 'src/app/services/update-cart.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  public totalItem: number = 0;

  productos: Producto[] = [];

  constructor(
    private _authService: AuthService,
    private _router: Router,
    private _updateCartService: UpdateCartService,
    private _productoService: ProductosService
  ) {}

  ngOnInit(): void {
    this._updateCartService
      .getUpdatedCart$()
      .pipe(
        switchMap(() => {
          return this._productoService.getProductsFromCady();
        })
      )
      .subscribe(productos => this.productos = productos);

    /* this._updateCartService.setUpdatedCart$(this.productos) */
  }

  logout() {
    this._router.navigateByUrl('/');
    this._authService.logout();
  }
}
