import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAddonComponent } from './add-addon/add-addon.component';
import { ListAddonComponent } from './list-addon/list-addon.component';

const routes: Routes = [
  {
    path: '',
    component: ListAddonComponent
  },
  {
    path: 'add_addon',
    component: AddAddonComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddonRoutingModule { }
