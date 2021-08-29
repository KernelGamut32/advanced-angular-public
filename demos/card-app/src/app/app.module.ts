import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CardManagementModule } from './card-management/card-management.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CardManagementModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
