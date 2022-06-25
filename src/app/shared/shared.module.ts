import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { MaterialModule } from './material.module';
import { RouterModule } from '@angular/router';
import { TableComponent } from './components/table/table.component';
import { LoaderComponent } from './components/loader/loader.component';


@NgModule({
  declarations: [
    SidebarComponent,
    HeaderComponent,
    TableComponent,
    LoaderComponent
  ],
  exports: [
    SidebarComponent,
    HeaderComponent,
    TableComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ]
})
export class SharedModule { }
