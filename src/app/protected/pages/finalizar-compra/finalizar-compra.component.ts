import { Component, OnInit } from '@angular/core';
import { UpdateService } from '../../services/update.service';

@Component({
  selector: 'app-finalizar-compra',
  templateUrl: './finalizar-compra.component.html',
  styleUrls: ['./finalizar-compra.component.css'],
})
export class FinalizarCompraComponent implements OnInit {
  total!: number;
  paymentHandler: any = null;
  stripeAPIKey: any = 'pk_test_51L2FcxLGmgrGzDkTYu1WZDVN7NPtcUtFhQ6QjRpzJpONpjO0LbxzBHO8IGW8atuxOAKm4PlmJIhLwMikvmA5E8At00cj1yaQCo';

  constructor(private _update: UpdateService) {}

  ngOnInit(): void {
    this._update.getUpdated$().subscribe((total) => (this.total = total));
    this.invokeStripe();
  }

  makePayment(amount: any) {
    const paymentHandler = (<any>window).StripeCheckout.configure({
      key: this.stripeAPIKey,
      locale: 'auto',
      token: function (stripeToken: any) {
        console.log(stripeToken);
        alert('Stripe token generated!');
      },
    });
    paymentHandler.open({
      name: 'ItSolutionStuff.com',
      description: '3 widgets',
      amount: amount * 100,
    });
  }

  invokeStripe() {
    if (!window.document.getElementById('stripe-script')) {
      const script = window.document.createElement('script');
  
      script.id = 'stripe-script';
      script.type = 'text/javascript';
      script.src = 'https://checkout.stripe.com/checkout.js';
      script.onload = () => {
        this.paymentHandler = (<any>window).StripeCheckout.configure({
          key: this.stripeAPIKey,
          locale: 'auto',
          token: function (stripeToken: any) {
            console.log(stripeToken);
            alert('Payment has been successfull!');
          },
        });
      };
  
      window.document.body.appendChild(script);
    }
  }
}
