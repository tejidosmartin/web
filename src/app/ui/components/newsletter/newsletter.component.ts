import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { tap } from 'rxjs';
import { EmailServiceService } from 'src/app/services/email-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.css'],
})
export class NewsletterComponent implements OnInit {
  nodeMailerForm!: FormGroup;

  constructor(
    private _fb: FormBuilder,
    private _emailService: EmailServiceService,
    private _router: Router,
    private _location: Location
  ) {}

  ngOnInit(): void {
    this.nodeMailerForm = this._fb.group({
      email: [null, [Validators.required]],
    });
  }

  sendMail() {
    let email = this.nodeMailerForm.value.email;
    let reqObj = { email: email };

    this._emailService
      .sendMail(reqObj)
      .pipe(
        tap(() =>
          this._router
            .navigateByUrl('/', { skipLocationChange: true })
            .then(() => {
              this._router.navigate([decodeURI(this._location.path())]);
            })
        )
      )
      .subscribe((data) => {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Email enviado, gracias por suscribirte!',
          showConfirmButton: false,
          timer: 1500,
        });
      });
  }
}
