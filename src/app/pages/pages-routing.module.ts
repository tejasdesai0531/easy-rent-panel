import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'product',
    loadChildren: () => import('./product/product.module').then(m => m.ProductModule)
  },
  {
    path: 'addon',
    loadChildren: () => import('./addon/addon.module').then(m => m.AddonModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
