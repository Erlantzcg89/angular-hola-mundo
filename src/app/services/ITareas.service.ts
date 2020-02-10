import { Observable } from 'rxjs';
import { Tarea } from '../model/tarea';

export interface ITareasService {

    listar(): Observable<Array<Tarea>>;

    detalle(id: number): Observable<Tarea>;

    /**
     * crear nueva tarea
     * @param tarea a dar de alta, sin id
     * @return observable con la tarea dada de alta, con id actualizado
     */
    crear(tarea: Tarea): Observable<Tarea>;

    modificar(tarea: Tarea): Observable<Tarea>;

    borrar(id): Observable<Tarea>;


}