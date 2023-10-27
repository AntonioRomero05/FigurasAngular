import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent {
  lado:number;

  constructor() {
    this.lado = 0; // Inicializa la propiedad con un valor por defecto
  }
  
  calcularArea(): number {
    return this.lado * this.lado;
  }

}
