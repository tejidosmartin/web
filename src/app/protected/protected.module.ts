import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProtectedRoutingModule } from './protected-routing.module';
import { CarritoComponent } from './pages/carrito/carrito.component';
import { HomeComponent } from './pages/home/home.component';
import { FinalizarCompraComponent } from './pages/finalizar-compra/finalizar-compra.component';
import { ImagenPipe } from './pipes/imagen.pipe';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    CarritoComponent,
    HomeComponent,
    FinalizarCompraComponent,
    ImagenPipe
  ],
  imports: [
    CommonModule,
    ProtectedRoutingModule,
    SharedModule
  ]
})
export class ProtectedModule { }
