import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './pages/list/list.component';
import { ProductosRoutingModule } from './productos-routing.module';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { CardProductoComponent } from './components/card-producto/card-producto.component';
import { UiModuleModule } from '../ui/ui-module.module';
import { SharedModule } from '../shared/shared.module';
import { ImagenPipe } from './pipes/imagen.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductoComponent } from './pages/producto/producto.component';
import { HomeComponent } from './pages/home/home.component';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    ListComponent,
    BuscadorComponent,
    CardProductoComponent,
    ImagenPipe,
    ProductoComponent,
    HomeComponent,   
  ],
  imports: [
    CommonModule,
    ProductosRoutingModule,
    UiModuleModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ]
})
export class ProductosModule { }
