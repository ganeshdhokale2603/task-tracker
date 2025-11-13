import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { DarkModeToggleComponent } from './components/dark-mode-toggle/dark-mode-toggle.component';


@NgModule({
  declarations: [
    DarkModeToggleComponent
  ],
  imports: [
    CommonModule,BrowserModule, FormsModule
  ],
})
export class AppModule { }
