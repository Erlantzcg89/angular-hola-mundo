import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';
import { Pokemon } from 'src/app/model/pokemon';

@Component({
  selector: 'app-pokemon-rest',
  templateUrl: './pokemon-rest.component.html',
  styleUrls: ['./pokemon-rest.component.scss']
})
export class PokemonRestComponent implements OnInit {

  pokemonPrueba: any;

  pokemon: Pokemon;

  pokemons: Array<Pokemon>;

  buscarId: string;

  constructor(private pokemonService: PokemonService) {

    this.pokemonPrueba = {};

    this.pokemon = new Pokemon('');

    this.buscarId = '';



  }

  ngOnInit() {
    console.trace('InicioComponent ngOnInit');

    this.pokemonService.getByName('pikachu').subscribe(
      data => {
        console.debug('peticion ok %o', data);
        this.pokemon.id = data.id
        this.pokemon.nombre = data.name
        this.pokemon.imagen = data.sprites.back_shiny;
        this.pokemon.imagen2 = data.sprites.front_shiny;
      },
      error => console.warn(error),
      () => {
        console.trace('esto es el finally');
      }
    );

    this.pokemonService.getByName('bulbasaur').subscribe(
      data => {
        console.debug('petición ok %o', data);
        this.pokemonPrueba = data;
      },
      error => console.warn(error),
      () => {
        console.trace('petición completa');
      }
    );

    function buscarRellenar(nombre: string) {
      this.pokemonService.getByName(nombre).subscribe(
        data => {
          console.debug('petición ok %o', data);
          let p = new Pokemon('');

          p.id = data.id
          p.nombre = data.name
          p.imagen = data.sprites.front_default;
          p.imagen2 = data.sprites.back_default;

          this.pokemons.push(p);

        },
        error => console.warn(error),
        () => {
          console.trace('esto es el finally');
        }
      );
    }
  }

}
