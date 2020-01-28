import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) {

    console.trace("PokemonServie Constructor");

  }


  getByName(nombre: string): Observable<any> {
    const url = `https://pokeapi.co/api/v2/pokemon/${nombre}/`;
    console.trace('PokemonService getPokemon' + url);

    return this.http.get(url);
  }

  // getAll()

  // getById()


}
