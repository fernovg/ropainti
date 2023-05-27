import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages/pages.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ComponentsComponent } from './pages/components/components.component';



@NgModule({
  declarations: [
    PagesComponent,
    InicioComponent,
    ComponentsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProvocameModule { }
