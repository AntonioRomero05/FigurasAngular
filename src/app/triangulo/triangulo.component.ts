import { Component } from '@angular/core';

@Component({
  selector: 'app-triangulo',
  templateUrl: './triangulo.component.html',
  styleUrls: ['./triangulo.component.css']
})
export class TrianguloComponent {

  base:number;
  altura:number;

  constructor() {
    this.base = 0; // Inicializa la propiedad con un valor por defecto
    this.altura=0;
  }
  
  calcularAreaT(): number {
    return this.base * this.altura /2
  }

}
