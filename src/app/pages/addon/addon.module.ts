import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddonRoutingModule } from './addon-routing.module';
import { ListAddonComponent } from './list-addon/list-addon.component';
import { AddAddonComponent } from './add-addon/add-addon.component';



@NgModule({
  declarations: [
    ListAddonComponent,
    AddAddonComponent,
  ],
  imports: [
    CommonModule,
    AddonRoutingModule
  ]
})
export class AddonModule { }
