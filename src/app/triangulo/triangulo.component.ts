import { Component } from '@angular/core';

@Component({
  selector: 'app-triangulo',
  templateUrl: './triangulo.component.html',
  styleUrls: ['./triangulo.component.scss']
})
export class TrianguloComponent {
  base: number=0;
  altura: number=0;
  resultado: number=0;

  calcular(){
    this.resultado = this.base * this.altura /2;
  }

}
