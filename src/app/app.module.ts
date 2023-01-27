import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PagesModule } from './pages/pages.module';

import { ErrorComponent } from './pages/error/error.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [AppComponent, ErrorComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule, PagesModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
