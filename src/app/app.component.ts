import { Component } from '@angular/core';

/**
 * app-component: componente principal que se carga al arrancar la app
 * 
 * selector: nombre de la etiqueta para inyectar el componente en el html
 * templateUrl: html del componente
 * styleUrls: estilos del componente
 * class AppComponent: clase typescript
 * title: variable con binding
 */

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  titulo = 'Hola Mundo';
  login = 'login';
  productos = {
    "nombre": "productos",
    "lista": [
      {
        "id": 1,
        "nombre": "bicicleta",
        "icono": "fas fa-biking",
        "electrico": true,
        "categoria": {
          "id": 1,
          "nombre": "vehiculos"
        },
        "historico": [
          {
            "fecha": "2017",
            "precio": 999
          },
          {
            "fecha": "2018",
            "precio": 888.99
          },
          {
            "fecha": "2019",
            "precio": 777.77
          }
        ]
      },
      {
        "id": 2,
        "nombre": "coche",
        "icono": "fas fa-car-side",
        "electrico": true,
        "categoria": {
          "id": 1,
          "nombre": "vehiculos"
        },
        "historico": [
          {
            "fecha": "2017",
            "precio": 3999
          },
          {
            "fecha": "2018",
            "precio": 2888.99
          },
          {
            "fecha": "2019",
            "precio": 1777.77
          }
        ]
      },
      {
        "id": 3,
        "nombre": "autobus",
        "icono": "fas fa-bus",
        "electrico": false,
        "categoria": {
          "id": 1,
          "nombre": "vehiculos"
        },
        "historico": [
          {
            "fecha": "2017",
            "precio": 10999
          },
          {
            "fecha": "2018",
            "precio": 9888.99
          },
          {
            "fecha": "2019",
            "precio": 8777.77
          }
        ]
      },
      {
        "id": 4,
        "nombre": "barco",
        "icono": "fas fa-anchor",
        "electrico": false,
        "categoria": {
          "id": 2,
          "nombre": "vehiculos-marinos"
        },
        "historico": [
          {
            "fecha": "2017",
            "precio": 100999
          },
          {
            "fecha": "2018",
            "precio": 80888.99
          },
          {
            "fecha": "2019",
            "precio": 50777.77
          }
        ]
      }]
  };

  pSeleccionado = "";

  seleccionarProducto = function (producto) {
    console.log("seleccionarProducto( id: " + producto.id + ", nombre: " + producto.nombre + ")");

    this.pSeleccionado = producto;

  }

}
