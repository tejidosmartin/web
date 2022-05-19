import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found/not-found.component';
import { GoTopComponent } from './go-top/go-top.component';
import { MaterialModule } from '../material/material.module';
import { ConfirmComponent } from './confirm/confirm.component';
import { TitleComponent } from './title/title.component';

@NgModule({
  declarations: [
    NotFoundComponent,
    GoTopComponent,
    ConfirmComponent,
    TitleComponent,
  ],
  imports: [CommonModule, MaterialModule],
  exports: [
    NotFoundComponent,
    GoTopComponent,
    ConfirmComponent,
    TitleComponent,
  ],
})
export class SharedModule {}
