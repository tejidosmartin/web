import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './shared/not-found/not-found.component';


const routes: Routes = [

  {
    path: "",
    loadChildren: () => import("./ui/ui-module.module").then(m => m.UiModuleModule)
  },
  {
    path: "productos",
    loadChildren: () => import("./productos/productos.module").then(m => m.ProductosModule)
  },
  {
    path: "**",
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
