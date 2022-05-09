import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  form: FormGroup = this._fb.group({
    email: ['test1@gmail.com', [Validators.required, Validators.email]],
    password: ['123456', [Validators.required, Validators.minLength(6)]],
  });

  constructor(
    private _fb: FormBuilder,
    private _router: Router,
    private _authService: AuthService
  ) {}

  ngOnInit(): void {}

  login() {
    console.log(this.form.value);
    const { email, password } = this.form.value;

    this._authService.login(email, password).subscribe((ok) => {

      console.log(ok);
      
      if (ok === true) {
        this._router.navigateByUrl('/carrito');
      } else {
        Swal.fire("Error", ok, "error")
      }
    });
    
  }
}
