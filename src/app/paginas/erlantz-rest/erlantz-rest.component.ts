import { Component, OnInit } from '@angular/core';
import { ErlantzService } from 'src/app/services/erlantz.service';

@Component({
  selector: 'app-erlantz-rest',
  templateUrl: './erlantz-rest.component.html',
  styleUrls: ['./erlantz-rest.component.scss']
})
export class ErlantzRestComponent implements OnInit {

  // declaraciones


  // constructor
  constructor(private erlantzService: ErlantzService) {

    // inicializaciones a 0


  }

  // ngOnInit
  ngOnInit() {

    console.trace('InicioComponent ngOnInit');

    // this.erlantzService.getByNameJuego('pikachu').subscribe(
    //   data => {
    //     console.debug('peticion ok %o', data);
    //     // this.pokemon.id = data.id
    //     // this.pokemon.nombre = data.name
    //     // this.pokemon.imagen = data.sprites.back_shiny;
    //     // this.pokemon.imagen2 = data.sprites.front_shiny;
    //   },
    //   error => console.warn(error),
    //   () => {
    //     console.trace('esto es el finally');
    //   }
    // );

  }// ngOnInit()

  buscarRellenar(nombre: string) {
    this.erlantzService.getByNameJuego(nombre).subscribe(
      data => {
        console.debug('petición ok %o', data);
        // let p = new Pokemon('');

        // p.id = data.id
        // p.nombre = data.name
        // p.imagen = data.sprites.front_default;
        // p.imagen2 = data.sprites.back_default;

        // this.pokemons.unshift(p);

      },
      error => console.warn(error),
      () => {
        console.trace('esto es el finally');
      }
    );
  }

}
