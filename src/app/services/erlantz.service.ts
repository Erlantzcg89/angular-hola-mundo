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

  getByNameJuego(nombre: string): Observable<any> {

    // url
    const url = `http://localhost:3000/juego/${nombre}/`;

    console.trace('PokemonService getPokemon' + url);

    // GET de la url
    return this.http.get(url);
  }

  // getAll()

  // getById()
}
