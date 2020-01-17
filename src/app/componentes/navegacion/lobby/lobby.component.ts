import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.scss']
})
export class LobbyComponent implements OnInit {

  salir = 'salir';
  saludo = 'Bienvenido';
  juego = 'juego peleas';

  constructor() { }

  ngOnInit() {
  }

}
