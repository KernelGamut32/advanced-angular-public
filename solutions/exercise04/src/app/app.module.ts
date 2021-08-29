import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { OrderingModule } from './ordering/ordering.module';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule,
    OrderingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
