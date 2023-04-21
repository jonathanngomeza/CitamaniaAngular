import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.scss']
})
export class CalculadoraComponent {
  numero1: number=10;
  numero2: number=20;
  resultado: number=0;

  sumar(){
    this.resultado = this.numero1 + this.numero2;
  }
  
  restar(){
    this.resultado = this.numero1 - this.numero2;
  }
  
  multiplicar(){
    this.resultado = this.numero1 * this.numero2;
  }

  dividir(){
    this.resultado = this.numero1 / this.numero2;
  }
}

