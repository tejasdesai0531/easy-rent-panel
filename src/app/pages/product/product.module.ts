import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ListProductComponent } from './list-product/list-product.component';
import { AddProductComponent } from './add-product/add-product.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ListProductComponent,
    AddProductComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    MatSlideToggleModule,
    SharedModule
  ]
})
export class ProductModule { }
