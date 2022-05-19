import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { HomeComponent } from './pages/home/home.component';
import { UiRoutingModule } from './ui-routing.module';
import { CarouselBrandsComponent } from './components/carousel-brands/carousel-brands.component';
import { SobreNosotrosComponent } from './pages/sobre-nosotros/sobre-nosotros.component';
import { AvisoLegalComponent } from './pages/aviso-legal/aviso-legal.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { MainComponent } from './pages/main/main.component';
import { CookiesComponent } from './pages/cookies/cookies.component';
import { PrivacidadComponent } from './pages/privacidad/privacidad.component';
import { PagosComponent } from './pages/pagos/pagos.component';
import { SharedModule } from '../shared/shared.module';
import { EnviosComponent } from './pages/envios/envios.component';
import { DevolucionesComponent } from './pages/devoluciones/devoluciones.component';
import { NewsletterComponent } from './components/newsletter/newsletter.component';
import { CardHomeComponent } from './components/card-home/card-home.component';

@NgModule({
  declarations: [
    HomeComponent,
    CarouselBrandsComponent,
    SobreNosotrosComponent,
    AvisoLegalComponent,
    ContactoComponent,
    MainComponent,
    CookiesComponent,
    PrivacidadComponent,
    PagosComponent,
    EnviosComponent,
    DevolucionesComponent,
    NewsletterComponent,
    CardHomeComponent,
  ],
  imports: [CommonModule, MaterialModule, UiRoutingModule, SharedModule],
})
export class UiModuleModule {}
