import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Cau1Component } from './cau1/cau1.component';


@NgModule({
  declarations: [
    AppComponent, Cau1Component

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: 'test', component: Cau1Component },

    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
