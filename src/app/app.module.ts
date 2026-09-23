import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TDFComponent } from './Pages/tdf/tdf.component';
import { MDFComponent } from './Pages/mdf/mdf.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TDFComponent,
    MDFComponent
  ],
  imports: [
    BrowserModule , 
    FormsModule , 
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
