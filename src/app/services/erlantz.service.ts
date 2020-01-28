import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErlantzService {

  constructor(private http: HttpClient) {

    console.trace("ErlantzService Constructor");

  }

  getJuego(): Observable<any> {

    // url
    const url = `http://localhost:3000/juego/`;

    console.trace('ErlantzSercive getJuego' + url);

    // GET
    return this.http.get(url);
  }

  getUsuarios(): Observable<any> {

    // url
    const url = `http://localhost:3000/usuarios/`;

    console.trace('PokemonService getUsuarios' + url);

    // GET
    return this.http.get(url);
  }

  getPersonajes(): Observable<any> {

    // url
    const url = `http://localhost:3000/personajes/`;

    console.trace('PokemonService getPersonajes' + url);

    // GET
    return this.http.get(url);
  }

  getCriaturas(): Observable<any> {

    // url
    const url = `http://localhost:3000/criaturas/`;

    console.trace('PokemonService getCriaturas' + url);

    // GET
    return this.http.get(url);
  }

  getZonas(): Observable<any> {

    // url
    const url = `http://localhost:3000/zonas/`;

    console.trace('PokemonService getZonas' + url);

    // GET
    return this.http.get(url);
  }

  getChat(): Observable<any> {

    // url
    const url = `http://localhost:3000/chat/`;

    console.trace('PokemonService getChat' + url);

    // GET 
    return this.http.get(url);
  }

  public addChat(id_usuario: number, fecha: string, mensaje: string): Observable<any> {

    // url
    const url = `http://localhost:3000/chat/`;

    const toAdd = { id_usuario: id_usuario, fecha: fecha, mensaje: mensaje };

    // POST
    return this.http.post(url, toAdd);
  }

  public deleteChat(id: number): Observable<any> {

    // url
    const url = `http://localhost:3000/chat/`;

    // DELETE
    return this.http.delete(url + id);
  }

}
