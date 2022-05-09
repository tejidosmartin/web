import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './pages/list/list.component';
import { ProductosRoutingModule } from './productos-routing.module';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { CardProductoComponent } from './components/card-producto/card-producto.component';
import { UiModuleModule } from '../ui/ui-module.module';
import { SharedModule } from '../shared/shared.module';
import { ImagenPipe } from './pipes/imagen.pipe';



@NgModule({
  declarations: [
    ListComponent,
    BuscadorComponent,
    CardProductoComponent,
    ImagenPipe,   
  ],
  imports: [
    CommonModule,
    ProductosRoutingModule,
    UiModuleModule,
    SharedModule
  ]
})
export class ProductosModule { }
