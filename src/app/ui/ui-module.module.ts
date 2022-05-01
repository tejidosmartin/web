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
import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';

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
    MenuComponent,
    FooterComponent,
  ],
  imports: [CommonModule, MaterialModule, UiRoutingModule, SharedModule],
  exports: [MenuComponent, FooterComponent],
})
export class UiModuleModule {}
