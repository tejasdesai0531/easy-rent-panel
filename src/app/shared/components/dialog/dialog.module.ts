import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DialogComponent } from './dialog.component';

@NgModule({
  declarations: [
    DialogComponent
  ],
  imports: [
    CommonModule,
    NgbModule
  ],
  exports: [
    DialogComponent
  ]
})
export class DialogModule { }
