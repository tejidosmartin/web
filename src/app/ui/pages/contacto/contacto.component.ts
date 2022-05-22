import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css'],
})
export class ContactoComponent implements OnInit {
  formContact: FormGroup = this._fb.group({
    email: ['', [Validators.required, Validators.email]],
    subject: ['', [Validators.required]],
    name: ['', [Validators.required]],
    mesagge: ['', [Validators.required]],
  });

  titulo: string = 'Contactanos';

  constructor(private _router: Router, private _fb: FormBuilder) {}

  ngOnInit(): void {}

  submit() {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Gracias por contactarnos',
      showConfirmButton: false,
      timer: 1500,
    });
    this._router.navigate(['/']);
  }
}
