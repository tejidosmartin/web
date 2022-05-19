import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarritoComponent } from './pages/carrito/carrito.component';
import { FinalizarCompraComponent } from './pages/finalizar-compra/finalizar-compra.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'productos',
        component: CarritoComponent,
      },
      {
        path: 'finalizar-compra',
        component: FinalizarCompraComponent,
      },
      {
        path: '',
        redirectTo: 'productos',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProtectedRoutingModule {}
