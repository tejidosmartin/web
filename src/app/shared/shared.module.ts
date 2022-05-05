import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found/not-found.component';
import { GoTopComponent } from './go-top/go-top.component';
import { MaterialModule } from '../material/material.module';
/* import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component'; */



@NgModule({
  declarations: [
    NotFoundComponent,
    GoTopComponent,
    /* MenuComponent,
    FooterComponent */
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports: [
    NotFoundComponent,
    GoTopComponent
    /* MenuComponent,
    FooterComponent */
  ]
})
export class SharedModule { }
