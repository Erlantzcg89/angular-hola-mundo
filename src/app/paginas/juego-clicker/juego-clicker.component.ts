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
  registro: Map<string, number>;

  constructor() {

    this.nombre = '';
    this.puntos = 0;
    this.token = false;


  }

  jugar(nombre: string) {

    console.trace('entrando en jugar');

    if (nombre !== '' && nombre !== 'Escribe puto') {

      this.token = true;

      setTimeout(this.timer, 1000);


    } else {
      this.nombre = 'Escribe puto';
    }

  }// jugar

  timer() {
    console.trace('entrando en timer');

    this.token = false;
    this.registro.set(this.nombre, this.puntos);

    this.nombre = '';
    this.puntos = 0;

  }// timer

  clickear() {
    console.trace('entrando en clickear');
    this.puntos++;

  }// clickear

  ngOnInit() {
  }

}
