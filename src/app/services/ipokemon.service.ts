import { Observable } from 'rxjs';

export interface IPokemonService {

    /**
     * Recuperamos los datos en JSON de un Pokemon por su nombre
     * @param nombre: string nombre del pokemon a buscar
     * @see GET /api/v2/pokemon/{nombre}/
     */
    getByName(nombre: String): Observable<any>;

    /**
     * Recupera un JSON con las caracteristicas de un Pokemon
     * @param nombre: string identificador del pokemon
     * @see GET /api/v2/ability/{nombre}/
     */
    getAbilidadByName(nombre: String): Observable<any>;
}
