import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { MenuComponent } from './home/menu/menu.component';

@NgModule({
  declarations: [HomeComponent, ErrorComponent, MenuComponent],
  imports: [CommonModule],
})
export class PagesModule {}
