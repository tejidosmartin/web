import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Producto } from 'src/app/productos/interfaces/producto.interface';

@Injectable({
  providedIn: 'root',
})
export class UpdateService {
  private _updateTotal$ = new BehaviorSubject({} as number);
  private _updateProductList$ = new BehaviorSubject({} as Producto[]);

  getUpdated$(): BehaviorSubject<number> {
    return this._updateTotal$;
  }

  setUpdated$(value: number) {
    this._updateTotal$.next(value);
  }

  getUpdatedProductList$(): BehaviorSubject<Producto[]> {
    return this._updateProductList$;
  }

  setUpdatedProductList$(productos: Producto[]) {
    this._updateProductList$.next(productos);
  }

  constructor() {}
}
