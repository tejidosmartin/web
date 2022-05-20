import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Producto } from '../productos/interfaces/producto.interface';

@Injectable({
  providedIn: 'root',
})
export class UpdateCartService {

  private _updateCart$ = new BehaviorSubject({} as Producto | Producto[]) ;

  getUpdatedCart$(): BehaviorSubject<Producto | Producto[]> {
    return this._updateCart$;
  }

  setUpdatedCart$(value: Producto | Producto[]) {
    this._updateCart$.next(value);
  }

  constructor() {}
}
