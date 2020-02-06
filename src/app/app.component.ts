import { Component } from '@angular/core';
import { GLOBAL } from './model/global';

/**
 * app-component: componente principal que se carga al arrancar la app
 * 
 * selector: nombre de la etiqueta para inyectar el componente en el html
 * templateUrl: html del componente
 * styleUrls: estilos del componente
 * class AppComponent: clase typescript
 * title: variable con binding
 */

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  global: any;

  constructor() {
    console.log('AppComponent constructor');

    this.global = GLOBAL;
  }// constructor

}// AppComponent
