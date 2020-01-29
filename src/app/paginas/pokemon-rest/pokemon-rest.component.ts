import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';
import { Pokemon } from 'src/app/model/pokemon';

@Component({
  selector: 'app-pokemon-rest',
  templateUrl: './pokemon-rest.component.html',
  styleUrls: ['./pokemon-rest.component.scss']
})
export class PokemonRestComponent implements OnInit {

  // declaraciones
  pokemonPrueba: any;
  pokemon: Pokemon;
  pokemons: Array<Pokemon>;
  mensajeAlert: String;

  // constructor
  constructor(private pokemonService: PokemonService) {

    // inicializaciones a 0
    this.pokemonPrueba = {};
    this.pokemon = new Pokemon('');
    this.pokemons = [];
    this.mensajeAlert = '';

  }

  // ngOnInit
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

  }// ngOnInit()

  buscarRellenar(nombre: string) {
    this.pokemonService.getByName(nombre).subscribe(
      data => {
        console.debug('petición ok %o', data);
        let p = new Pokemon('');

        p.id = data.id
        p.nombre = data.name
        p.imagen = data.sprites.front_default;
        p.imagen2 = data.sprites.back_default;
        p.imagen3 = data.sprites.front_shiny;
        p.imagen4 = data.sprites.back_shiny;
        p.abilities = data.abilities;

        this.pokemons.unshift(p);

        this.mensajeAlert = '';

        // buscar su abilidad

        p.abilities.forEach(element => {

          console.debug(element);
          this.pokemonService.getAbilidadByName(element.ability.name).subscribe(
            data => {
              console.debug(' encontrada habilidad %o', data);

              let obj = {};
              obj["nombre"] = data.names[4].name;
              obj["descripcion"] = data.flavor_text_entries[4].flavor_text;

              p.abilitiesDetalle.push(obj);

            }
          )

        });

      },
      error => {
        console.warn(error);
        this.mensajeAlert = `El pokemon ${nombre} no existe`;
      },
      () => {
        console.trace('esto es el finally');
      }
    );
  }

}
