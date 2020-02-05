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

    console.trace('JuegoClickerComponent constructor');

    this.nombre = '';
    this.puntos = 0;
    this.token = false;
    this.registro = [];
    this.registro.push('Pepe: 30 puntos');

  }

  jugar(nombre: string) {

    console.trace('JuegoClickerComponent jugar');

    if (nombre !== '' && nombre !== 'Escribe puto') {

      this.token = true;

      setTimeout(() => {
        console.trace('JuegoClickerComponent timer');
        this.token = false;
        this.registro.push(this.nombre + ': ' + this.puntos + ' puntos');
        this.nombre = '';
        this.puntos = 0;
      }, 2000); // timer

    } else {
      this.nombre = 'Escribe puto';
    }

  }// jugar

  clickear() {
    console.trace('JuegoClickerComponententrando clickear');
    this.puntos++;
  }// clickear

  ngOnInit() {
  }//ngOnInit

}
