import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { MenuComponent } from './home/menu/menu.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [HomeComponent, ErrorComponent, MenuComponent],
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
})
export class PagesModule {}
