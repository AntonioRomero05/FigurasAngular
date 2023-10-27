import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { CirculoComponent } from './circulo/circulo.component';
import { TrianguloComponent } from './triangulo/triangulo.component';
import { TemplateComponent } from './template/template.component';
import { CarruselComponent } from './carrusel/carrusel.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CalculadoraComponent,
    CirculoComponent,
    TrianguloComponent,
    TemplateComponent,
    CarruselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
