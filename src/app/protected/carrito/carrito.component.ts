import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Producto } from 'src/app/productos/interfaces/producto.interface';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css'],
})
export class CarritoComponent implements OnInit {
  productos: Producto[] = [];

  public totalItem: number = 0


  get usuario() {
    return this._authService.usuario;
  }

  constructor(
    private _router: Router,
    private _authService: AuthService,
    private _productosService: ProductosService
  ) {}

  ngOnInit(): void {
    this._productosService
      .getProductsFromCady()
      .subscribe((productos) => console.log(productos));
  }

  logout() {
    this._router.navigateByUrl('/auth/login');
  }
}
