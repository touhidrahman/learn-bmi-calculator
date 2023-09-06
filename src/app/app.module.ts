import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BmiFormComponent } from './components/bmi-form/bmi-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FeetToInchesPipe } from './pipes/feet-to-inches.pipe';
import { KgToPoundPipe } from './pipes/kg-to-pound.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BmiFormComponent,
    FeetToInchesPipe,
    KgToPoundPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    FeetToInchesPipe,
    KgToPoundPipe
  ]
})
export class AppModule { }
