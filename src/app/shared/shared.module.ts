import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found/not-found.component';
/* import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component'; */



@NgModule({
  declarations: [
    NotFoundComponent,
    /* MenuComponent,
    FooterComponent */
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NotFoundComponent,
    /* MenuComponent,
    FooterComponent */
  ]
})
export class SharedModule { }
