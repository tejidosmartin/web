import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from 'src/app/classes/producto';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  private _urlBase = environment.baseUrl

  constructor(private _http: HttpClient) { }

  getProducts(){
    return this._http.get<Producto[]>(`${this._urlBase}/Controller.php?action=list`)
  }

  getProduct(codigo: number) {
    return this._http.get(`${this._urlBase}/Controller.php?codigo=${codigo}`);
  }
}
