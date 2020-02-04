import { Component, OnInit, Input } from '@angular/core';
import { ErlantzService } from 'src/app/services/erlantz.service';

@Component({
  selector: 'app-erlantz-rest',
  templateUrl: './erlantz-rest.component.html',
  styleUrls: ['./erlantz-rest.component.scss']
})
export class ErlantzRestComponent implements OnInit {

  juego: any;
  usuarios: Array<any>;
  personajes: Array<any>;
  criaturas: Array<any>;
  zonas: Array<any>;
  chat: Array<any>;

  mensaje: string;
  chatId: number;

  constructor(private erlantzService: ErlantzService) {

    this.juego = {};
    this.usuarios = [];
    this.personajes = [];
    this.criaturas = [];
    this.zonas = [];
    this.chat = [];

    this.mensaje = '';
    this.chatId = null;

  }

  ngOnInit() {

    console.trace('InicioComponent ngOnInit');

    this.erlantzService.getJuego().subscribe(
      data => {
        console.debug('peticion ok %o', data);
        this.juego = data;
      },
      error => console.warn(error)
    );

    this.erlantzService.getUsuarios().subscribe(
      data => {
        console.debug('peticion ok %o', data);
        this.usuarios = data;
      },
      error => console.warn(error)
    );

    this.erlantzService.getPersonajes().subscribe(
      data => {
        console.debug('peticion ok %o', data);
        this.personajes = data;
      },
      error => console.warn(error)
    );

    this.erlantzService.getCriaturas().subscribe(
      data => {
        console.debug('peticion ok %o', data);
        this.criaturas = data;
      },
      error => console.warn(error)
    );

    this.erlantzService.getZonas().subscribe(
      data => {
        console.debug('peticion ok %o', data);
        this.zonas = data;
      },
      error => console.warn(error)
    );

    this.erlantzService.getChat().subscribe(
      data => {
        console.debug('peticion ok %o', data);
        this.chat = data;
      },
      error => console.warn(error)
    );

  }// ngOnInit()

  mensajeChat(mensaje: string) {
    this.erlantzService.addChat(1, "28/01/2020", mensaje).subscribe(
      data => {
        console.debug('peticion ok %o', data);
      },
      error => console.warn(error)
    );
  }

  borrarChat(id: number) {
    this.erlantzService.deleteChat(id).subscribe(
      data => {
        console.debug('peticion ok %o', data);
      },
      error => console.warn(error)
    );
  }
}
