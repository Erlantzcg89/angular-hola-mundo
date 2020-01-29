import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPokemonService } from './ipokemon.service';

@Injectable({
  providedIn: 'root'
})
export class PokemonService implements IPokemonService {

  constructor(private http: HttpClient) {
    console.trace("PokemonServie Constructor");
  }

  getByName(nombre: string): Observable<any> {
    const url = `https://pokeapi.co/api/v2/pokemon/${nombre}/`;
    console.trace('PokemonService getByName ' + url);
    return this.http.get(url);
  }

  getAbilidadByName(nombre: string): Observable<any> {
    const url = `https://pokeapi.co/api/v2/ability/${nombre}/`;
    console.trace('PokemonService getCaracteristicasByName ' + url);
    return this.http.get(url);
  }

}
