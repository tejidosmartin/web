import { Component, OnInit } from '@angular/core';
import { Producto } from '../../interfaces/producto.interface';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: [],
})
export class ListComponent implements OnInit {
  productos: Producto[] = [];

  constructor(private _productoService: ProductosService) {}

  ngOnInit(): void {
    this._productoService.getProducts().subscribe((productos) => {
      this.productos = productos;
      console.log(this.productos);
      
    });
  }
}
