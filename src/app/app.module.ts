import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { WjGridModule, WjFlexGrid } from '@mescius/wijmo.angular2.grid'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    WjGridModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
