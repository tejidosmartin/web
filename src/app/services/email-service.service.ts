import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmailServiceService {

  private _mernUrl: string = environment.mernUrl;

  constructor(private _http: HttpClient) { }

  sendMail(body: any){
    let headers = {
      headers: new HttpHeaders({
        'Content-Type' : 'application/json'
      })
    }
    return this._http.post(`${this._mernUrl}/auth/sendmail`, body, headers)
  }
}
