import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  get usuario(){
    return this._authService.usuario
  }

  constructor(private _router: Router, private _authService: AuthService) { }

  ngOnInit(): void {
  }

  logout(){
    this._router.navigateByUrl("/auth/login")
  }

}
