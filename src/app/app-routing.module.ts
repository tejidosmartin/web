import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  /* { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: HomeComponent }, */
  /* {
    path: "",
    component: HomeComponent
  }, */
  {
    path: "",
    loadChildren: () => import("./ui/ui-module.module").then(m => m.UiModuleModule)
  },
  {
    path: "productos",
    loadChildren: () => import("./productos/productos.module").then(m => m.ProductosModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
