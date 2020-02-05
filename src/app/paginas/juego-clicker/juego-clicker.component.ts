import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-juego-clicker',
  templateUrl: './juego-clicker.component.html',
  styleUrls: ['./juego-clicker.component.scss']
})
export class JuegoClickerComponent implements OnInit {

  puntos: number;
  token: boolean;
  nombre: string;
  registro: string[];

  constructor() {

    this.nombre = '';
    this.puntos = 0;
    this.token = false;
    this.registro = [];
    this.registro.push('Pepe: 30 puntos')

    console.trace('mierda array: %o', this.registro);


  }

  jugar(nombre: string) {

    console.trace('entrando en jugar');

    console.trace('Array: %o', this.registro);

    if (nombre !== '' && nombre !== 'Escribe puto') {

      this.token = true;

      setTimeout(() => {
        console.trace('entrando en timer');

        this.token = false;

        this.registro.push(this.nombre + ': ' + this.puntos + ' puntos');

        console.trace('Array despues de rellenar: %o', this.registro);

        this.nombre = '';
        this.puntos = 0;
      }, 2000);


    } else {
      this.nombre = 'Escribe puto';
    }

  }// jugar

  // timer(scope) {


  // }// timer

  clickear() {
    console.trace('entrando en clickear');
    this.puntos++;

  }// clickear

  ngOnInit() {
  }

}
