import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OrderingModule } from './ordering/ordering.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    OrderingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
