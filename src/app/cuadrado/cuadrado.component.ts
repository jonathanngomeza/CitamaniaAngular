import { Component } from '@angular/core';

@Component({
  selector: 'app-cuadrado',
  templateUrl: './cuadrado.component.html',
  styleUrls: ['./cuadrado.component.scss']
})
export class CuadradoComponent {
  lado: number=0;
  resultado: number=0;

  calcular(){
    this.resultado = this.lado * this.lado;
  }


}
