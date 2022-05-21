import { Component, OnInit } from '@angular/core';
import { Producto } from '../../interfaces/producto.interface';
import { ProductosService } from '../../../services/productos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: [
    `
      .page-wrapper {
        display: -webkit-flex;
        display: flex;
        -webkit-flex-wrap: wrap;
        flex-wrap: wrap;
      }

      .page-wrapper .page-inner {
        display: -webkit-flex;
      }
    `,
  ],
})
export class ListComponent implements OnInit {
  titulo: string = "Catálogo"
  productos: Producto[] = [];
  filter!: string;

  constructor(
    private _productoService: ProductosService,
    private _route: Router,
    private _activedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    if (this._route.url.includes('filter')) {
      this._activedRoute.queryParams
        .pipe(
          switchMap((params) => {
            return this._productoService.getFilterByFamily(params['filter']);
          })
        )
        .subscribe();
    }
    this._productoService.get("list").subscribe((productos) => {
      this.productos = productos;
    });
  }
}
