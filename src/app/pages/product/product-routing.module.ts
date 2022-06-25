import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { ListProductComponent } from './list-product/list-product.component';

const routes: Routes = [
  {
    path: '',
    component: ListProductComponent
  },
  {
    path: 'add_product',
    component: AddProductComponent
  },
  {
    path: 'edit_product/:id',
    component: AddProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
