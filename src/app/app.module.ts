import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SignaturePadModule } from 'angular2-signaturepad';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SignaturePadModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
   }
 }
