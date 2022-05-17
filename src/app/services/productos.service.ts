import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';

import { environment } from 'src/environments/environment';
import { Producto } from '../productos/interfaces/producto.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductosService {
  private _urlBase = environment.baseUrl;

  public itemList: any;

  public productList = new BehaviorSubject<any>([]);

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

  getProductsFromCady() {
    return this._http.get<Producto[]>(`${this._urlBase}/controller-cady.php`);
  }

  getFilterByFamily(filter: string) {
    return this._http.get<Producto[]>(
      `${this._urlBase}/Controller.php?filter=${filter}`
    );
  }

  addArticleToCart(producto: Producto) {
    return this._http.post<Producto>(
      `${this._urlBase}/controller-add-cady.php`,
      JSON.stringify(producto)
    );
  }

  /* addArticleToCart(producto: Producto) {
    this.itemList.push(producto);
    this.productList.next(this.itemList);
    this.getTotalPrice();
    console.log(this.itemList);
  }

  setProduct(producto: any) {
    this.itemList.push(...producto);
    this.productList.next(producto);
  }

  getTotalPrice() {
    let total = 0;
    this.itemList.map((a: any) => {
      total += a.total;
    });
  }

  removeArticleToCart(producto: Producto) {
    this.itemList.map((a: any, index: any) => {
      if (producto.id === a.id) {
        this.itemList.splice(index, 1);
      }
    });
  }

  removeAllCart() {
    this.itemList = [];
    this.productList.next(this.itemList);
  } */
}
