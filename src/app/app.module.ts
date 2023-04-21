import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PruebaComponent } from './prueba/prueba.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { TrianguloComponent } from './triangulo/triangulo.component';
import { CuadradoComponent } from './cuadrado/cuadrado.component';
import { TablasDeMultiplicarComponent } from './tablas-de-multiplicar/tablas-de-multiplicar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PruebaComponent,
    CalculadoraComponent,
    TrianguloComponent,
    CuadradoComponent,
    TablasDeMultiplicarComponent
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
