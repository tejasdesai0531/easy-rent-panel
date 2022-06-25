import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';




@NgModule({
  declarations: [
    DefaultComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatToolbarModule,
    MatSidenavModule
  ]
})
export class DefaultModule { }
