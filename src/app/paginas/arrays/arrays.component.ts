import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-arrays',
  templateUrl: './arrays.component.html',
  styleUrls: ['./arrays.component.scss']
})
export class ArraysComponent implements OnInit {

  pokemon: any;

  // zona arrays
  frutas: any;

  total: Number;
  nombresFrutas: any;
  totalDescuento: Number;
  totalAmarillas: Number;
  frutasAmarillas: any;
  frutasVerdes: any;
  colores: any;

  constructor(private pokemonService: PokemonService) {

    console.trace('Arrays component constructor');
    this.pokemon = {};

    // arrays
    this.total = 0;

    this.frutas = [
      { 'nombre': 'fresa', 'precio': 2.45, 'descuento': 0, 'colores': ['rojo'] },
      { 'nombre': 'pera', 'precio': 3.5, 'descuento': 10, 'colores': ['amarillo', 'verde'] },
      { 'nombre': 'manzana', 'precio': 1.99, 'descuento': 50, 'colores': ['amarillo', 'verde', 'rojo'] }
    ];

  }// constructor

  ngOnInit() {
    console.trace('InicioComponent ngOnInit');

    this.pokemonService.getPokemon().subscribe(
      data => {
        console.debug('petición ok %o', data);
        this.pokemon = data;
      },
      error => console.warn(error),
      () => {
        console.trace('petición completa');
      }
    );

    // operaciones con arrays
    this.nombresFrutas = [];
    this.frutasAmarillas = [];
    this.frutasVerdes = [];
    this.colores = [];
    this.total = 0;
    this.totalDescuento = 0;
    this.totalAmarillas = 0;

    // this.frutas.forEach(f => {
    //   //  this.total += f.precio;
    //   this.nombresFrutas.push(f.nombre);
    // });

    this.nombresFrutas = this.frutas.map(el => el.nombre);

    // this.total = this.frutas.reduce((previous, current) => {
    //   console.debug(previous, current);
    //   return previous + current.precio;
    // }, 0);

    // this.total = this.frutas.map(elemento => {
    //   return elemento.precio;
    // }).reduce((previous, current) => {
    //   return previous + current;
    // }, 0);

    this.total = this.frutas.map(el => el.precio).reduce((p, c) => p + c);
    this.nombresFrutas.push(this.frutas.map(el => el.nombre).reduce((p, c) => p + c));

    this.totalDescuento = this.frutas.filter(fruta => fruta.descuento > 0).reduce((p, c) => (p + c.precio), 0);

    this.frutasAmarillas = this.frutas.filter(fruta => fruta.colores.includes('amarillo'));
    this.totalAmarillas = this.frutasAmarillas.map(el => el.precio).reduce((p, c) => p + c);

    this.frutasVerdes = this.frutas.filter(fruta => fruta.colores.includes('verde'));

    this.colores = this.frutas.reduce((p, c) => p.concat(c.colores), []);
    this.colores = new Set(this.colores);


  }// ngOnInit

}
