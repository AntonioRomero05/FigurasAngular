import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { CirculoComponent } from './circulo/circulo.component';
import { TrianguloComponent } from './triangulo/triangulo.component';
import { TemplateComponent } from './template/template.component';
import { CarruselComponent } from './carrusel/carrusel.component';

const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' }, // Ruta de inicio
  { path: 'inicio', component: CarruselComponent },
  {path: 'cuadrado', component: CalculadoraComponent},
  {path: 'circulo', component: CirculoComponent},
  {path: 'triangulo', component: TrianguloComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
