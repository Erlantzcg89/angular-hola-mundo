import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'animalesFiltro'
})
export class AnimalesPipe implements PipeTransform {

  /**
   * filtro para filtrar por nombre
   * @param datos 
   * @param busqueda 
   */
  transform(datos: any, busqueda: string, tipo: string): any {

    console.debug(datos);
    console.debug(busqueda);
    console.debug(tipo);


    let resultado;
    let nombre;

    busqueda = busqueda.trim();

    if (busqueda && '' !== busqueda) {

      busqueda = busqueda.toUpperCase();

      resultado = datos.filter((el) => {
        console.debug(el);
        nombre = el.Nombre.toUpperCase();
        return nombre.includes(busqueda);
      });

    } else {
      resultado = datos;
    }

    // filtrar por tipo
    if (tipo && tipo !== 'TODOS') {

      resultado = resultado.filter((el) => el.Tipo === tipo);

    }

    return resultado;

  }// transform

}// AnimalesPipe
