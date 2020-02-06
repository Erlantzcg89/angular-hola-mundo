import { Component, OnInit } from '@angular/core';
import { ANIMALES } from '../../model/animales';

@Component({
  selector: 'app-filtros',
  templateUrl: './filtros.component.html',
  styleUrls: ['./filtros.component.scss']
})
export class FiltrosComponent implements OnInit {

  coche: any;
  animales: Array<any>;
  tipos: Array<string>;
  tipo: string;
  busqueda: string;

  constructor() {
    console.trace('FiltrosComponent constructor');

    this.busqueda = '';

    this.animales = ANIMALES;
    this.tipo = 'TODOS';
    this.tipos = [...new Set(this.animales.map((el) => el.Tipo))];

    this.coche = {
      "nombre": "Audi r8",
      "color": "blanco",
      "isDiesel": false,
      "precio": 100000.465
    };
  }// constructor

  ngOnInit() {
    console.trace('FiltrosComponent ngOnInit');
  }// ngOnInit

}
