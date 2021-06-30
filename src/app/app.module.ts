import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SignaturePadModule } from 'angular2-signaturepad';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SignaturePadModule,
    FontAwesomeModule,
    LayoutModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
   }
 }
