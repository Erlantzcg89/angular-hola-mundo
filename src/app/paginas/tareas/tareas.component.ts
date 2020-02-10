import { Component, OnInit } from '@angular/core';
import { Tarea } from 'src/app/model/tarea';
import { TareasService } from 'src/app/services/tareas.service';
import { Alerta } from 'src/app/model/alerta';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.scss']
})
export class TareasComponent implements OnInit {

  tareas: Array<Tarea>;
  tituloTarea: string;
  alerta: Alerta;
  habilitado: boolean;

  constructor(private tareasService: TareasService) {

    console.trace('TareasComponent constructor');
    this.tareas = [];
    this.tituloTarea = '';
    this.alerta = undefined;
    this.habilitado = false;

  }// constructor

  ngOnInit() {

    console.trace('TareasComponent ngOnInit');

    this.onGet();

    // setInterval(() => {
    //   this.onGet();
    // }, 5000);

  }// oninit

  onGet() {

    this.tareasService.listar().subscribe(
      datos => {
        console.debug('get tareas ok %o', datos);
        this.tareas = datos;
      },
      error => console.warn(error)
    )

  }// onGet

  onUpdate(tarea: Tarea) {
    console.trace('onUpdate tarea: %o', tarea);

    tarea.completada = !tarea.completada

    this.tareasService.modificar(tarea).subscribe(
      data => {
        console.debug('put tarea ok %o', data);
        this.onGet();

      },
      error => console.warn(error)
    );

  }// onUpdate

  onBorrar(t: Tarea) {
    console.trace('onBorrar id: %o', t.id);

    this.tareasService.borrar(t.id).subscribe(
      data => {
        console.debug('borrar tarea ok %o', data);

        this.onGet();

        this.alerta = new Alerta();
        this.alerta.tipo = 'danger';
        this.alerta.cuerpo = 'Tarea: id ' + t.id + ' "' + t.titulo + '" borrada con éxito';
      },
      error => console.warn(error)
    );

  }// onBorrar

  onCrear(titulo: string) {
    console.trace('onUpdate tarea: %s', titulo);

    if (this.tituloTarea !== '') {

      let t = new Tarea();
      t.titulo = titulo;

      this.tareasService.crear(t).subscribe(
        data => {
          console.debug('crear tarea ok %o', data);

          this.tituloTarea = '';
          this.onGet();

          this.alerta = new Alerta();
          this.alerta.tipo = 'success';
          this.alerta.cuerpo = 'Tarea: "' + t.titulo + '" creada con éxito';
        },
        error => console.warn(error)
      );

    } else {

      this.alerta = new Alerta();
      this.alerta.tipo = 'warning';
      this.alerta.cuerpo = 'Aviso: Escribe un titulo para la tarea';

    }

  }// onCrear

  onHabilitar() {

    this.habilitado = !this.habilitado;

  }// onHabilitar

}// TareasCoponent
