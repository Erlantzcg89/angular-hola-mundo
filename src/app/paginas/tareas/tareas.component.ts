import { Component, OnInit } from '@angular/core';
import { Tarea } from 'src/app/model/tarea';
import { TareasService } from 'src/app/services/tareas.service';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.scss']
})
export class TareasComponent implements OnInit {

  tareas: Array<Tarea>;

  constructor(private tareasService: TareasService) {

    console.trace('TareasComponent constructor');
    this.tareas = [];

  }// constructor

  ngOnInit() {

    console.trace('TareasComponent ngOnInit');

    this.onGet();

    setInterval(() => {
      this.onGet();
    }, 5000);

  }// oninit

  onGet() {

    this.tareasService.listar().subscribe(
      datos => {
        console.debug('peticion ok %o', datos);
        this.tareas = datos;
      },
      error => console.warn(error)
    )
  }

  onUpdate(tarea: Tarea) {
    console.trace('onUpdate tarea: %o', tarea);

    tarea.completada = !tarea.completada

    this.tareasService.modificar(tarea).subscribe(
      data => {
        console.debug('peticion ok %o', data);
      },
      error => console.warn(error)
    );

  }

  onBorrar(id: number) {
    console.trace('onBorrar id: %o', id);

    this.tareasService.borrar(id).subscribe(
      data => {
        console.debug('peticion ok %o', data);
      },
      error => console.warn(error)
    );

  }

}// TareasCoponent
