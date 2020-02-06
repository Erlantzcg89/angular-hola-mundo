import { Component, OnInit } from '@angular/core';
import { RUTAS } from '../../model/rutas';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  rutas: Array<any>;

  constructor() {
    console.trace('NavbarComponent constructor');

    this.rutas = RUTAS.sort((a, b) => {
      if (a.nombre < b.nombre) {
        return -1;
      }
      if (a.nombre > b.nombre) {
        return 1;
      }
      return 0;
    });

    console.trace(this.rutas);
  } // constructor

  ngOnInit() {
    console.trace('NavbarComponent ngOnInit');
  } // ngOnInit

} // NavbarComponent
