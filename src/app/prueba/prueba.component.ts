import { Component } from '@angular/core';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.scss']
})
export class PruebaComponent {
 dato: string = "Valor de ejemplo";

 cambiarValor(){
  this.dato ="Nuevo valor"; 
 }

 mostrarValor(){
  alert(this.dato);
 }
}
