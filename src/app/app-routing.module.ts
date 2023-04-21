import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PruebaComponent } from './prueba/prueba.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { TrianguloComponent } from './triangulo/triangulo.component';
import { CuadradoComponent } from './cuadrado/cuadrado.component';
import { TablasDeMultiplicarComponent } from './tablas-de-multiplicar/tablas-de-multiplicar.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'prueba', component: PruebaComponent },
  { path: 'cal', component: CalculadoraComponent },
  { path: 'triangulo', component: TrianguloComponent },
  { path: 'cuadrado', component: CuadradoComponent },
  { path: 'tablas', component: TablasDeMultiplicarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }