import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DefaultModule } from './layout/default/default.module';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DefaultModule,
    BrowserAnimationsModule,
    SharedModule,
    ToastrModule.forRoot({
      maxOpened: 1,
      timeOut: 1000,
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
