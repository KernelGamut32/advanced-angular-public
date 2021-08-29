import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BehaviorSubjectModule } from './behavior-subject/behavior-subject.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BehaviorSubjectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
