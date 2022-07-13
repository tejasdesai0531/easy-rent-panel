import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { MaterialModule } from './material/material.module';
import { RouterModule } from '@angular/router';
import { TableComponent } from './components/table/table.component';
import { LoaderComponent } from './components/loader/loader.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputComponent } from './components/input/input.component';
import { DialogModule } from './components/dialog/dialog.module';


@NgModule({
  declarations: [
    SidebarComponent,
    HeaderComponent,
    TableComponent,
    LoaderComponent,
    InputComponent
  ],
  exports: [
    SidebarComponent,
    HeaderComponent,
    TableComponent,
    LoaderComponent,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    InputComponent,
    DialogModule
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    DialogModule
  ]
})
export class SharedModule { }
