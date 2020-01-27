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



  constructor(private pokemonService: PokemonService) {

    console.trace('Arrays component constructor');
    this.pokemon = {};

    // arrays
    this.total = 0;

    this.frutas = [
      { 'nombre': 'fresa', 'precio': 2.45 },
      { 'nombre': 'pera', 'precio': 3.5 },
      { 'nombre': 'manzana', 'precio': 1.99 }
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

  }// ngOnInit

}
