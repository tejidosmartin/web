import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';
import { Producto } from '../productos/interfaces/producto.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductosService {
  private _urlBase = environment.baseUrl;

  constructor(private _http: HttpClient) {}

  get(action: string) {
    return this._http.get<Producto[]>(
      `${this._urlBase}/Controller.php?action=${action}`
    );
  }

  getProduct(codigo: string) {
    return this._http.get<Producto>(
      `${this._urlBase}/Controller.php?codigo=${codigo}`
    );
  }

  getProductsFromCady(){
    return this._http.get<Producto[]>(`${this._urlBase}/controller-cady.php`)
  }

  getFilterByFamily(filter: string) {
    return this._http.get<Producto[]>(
      `${this._urlBase}/Controller.php?filter=${filter}`
    );
  }

  addArticleToCady(producto: Producto) {
    return this._http.post<Producto>(
      `${this._urlBase}/controller-add-cady.php`,
      JSON.stringify(producto)
    );
  }

  removeArticleToCady(){

  }
}
