import { Component } from '@angular/core';

@Component({
  selector: 'app-circulo',
  templateUrl: './circulo.component.html',
  styleUrls: ['./circulo.component.css']
})
export class CirculoComponent {

  radio:number;

  constructor() {
    this.radio = 0; // Inicializa la propiedad con un valor por defecto
  }
  
  calcularAreaC(): number {
    return (this.radio * this.radio)*3.1416
  }

}
