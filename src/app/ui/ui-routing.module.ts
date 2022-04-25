import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AvisoLegalComponent } from './pages/aviso-legal/aviso-legal.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { CookiesComponent } from './pages/cookies/cookies.component';
import { HomeComponent } from './pages/home/home.component';
import { MainComponent } from './pages/main/main.component';
import { PagosComponent } from './pages/pagos/pagos.component';
import { PrivacidadComponent } from './pages/privacidad/privacidad.component';
import { SobreNosotrosComponent } from './pages/sobre-nosotros/sobre-nosotros.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: "",
        component: MainComponent
      },
      {
        path: "contacto",
        component: ContactoComponent
      },
      {
        path: "aviso-legal",
        component: AvisoLegalComponent
      },
      {
        path: "cookies",
        component: CookiesComponent
      },
      {
        path: "sobre-nosotros",
        component: SobreNosotrosComponent
      },
      {
        path: "politica-de-privacidad",
        component: PrivacidadComponent
      },
      {
        path: "pago-seguro",
        component: PagosComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UiRoutingModule {}
