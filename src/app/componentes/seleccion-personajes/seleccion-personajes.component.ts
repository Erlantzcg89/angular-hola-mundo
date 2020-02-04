import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seleccion-personajes',
  templateUrl: './seleccion-personajes.component.html',
  styleUrls: ['./seleccion-personajes.component.scss']
})
export class SeleccionPersonajesComponent implements OnInit {

  salir = 'salir';
  arena = 'entrar a la arena';

  personajes = {
    "nombre": "productos",
    "lista": [
      {
        "id": 1,
        "nombre": "Conan el Barbaro",
        "avatar": "",
        "raza": {
          "id": 1,
          "nombre": "humano"
        },
        "clase": {
          "id": 1,
          "nombre": "guerrero"
        }
      },
      {
        "id": 2,
        "nombre": "Eltharion",
        "avatar": "",
        "raza": {
          "id": 2,
          "nombre": "elfo"
        },
        "clase": {
          "id": 2,
          "nombre": "cazador"
        }
      },
      {
        "id": 3,
        "nombre": "Lur",
        "avatar": "",
        "raza": {
          "id": 3,
          "nombre": "lobo"
        },
        "clase": {
          "id": 3,
          "nombre": "explorador"
        }
      },
      {
        "id": 4,
        "nombre": "Gor-balgh",
        "avatar": "",
        "raza": {
          "id": 4,
          "nombre": "orco"
        },
        "clase": {
          "id": 1,
          "nombre": "guerrero"
        }
      }]
  };

  pjSeleccionado: any = {};

  seleccionarPersonaje = function (personaje) {
    console.log("seleccionarProducto( id: " + personaje.id + ", nombre: " + personaje.nombre + ")");

    this.pjSeleccionado = personaje;

  }

  constructor() { }

  ngOnInit() {
  }

}
