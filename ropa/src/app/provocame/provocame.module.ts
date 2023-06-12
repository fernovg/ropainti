import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioComponent } from './pages/inicio/inicio.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    InicioComponent,   
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class ProvocameModule { }
