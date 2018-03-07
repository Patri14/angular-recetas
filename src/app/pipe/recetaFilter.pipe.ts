import { Pipe, PipeTransform } from '@angular/core';
import { RecetaRecetario } from '../model/recetaRecetario';

@Pipe({
  name: 'filter'
})
export class RecetaFilter implements PipeTransform {

  /**
   * Filtro para buscar en una coleccion de Recetas. No es CaseSensitive.
   * @param aReceta : Recetarecetario[]
   * @param searchText : string con el nombre de la receta 
   */
  transform(recetas: RecetaRecetario[], searchText: string, isGlutenFree : boolean ): RecetaRecetario[] {  

    //si no hay recetas retornar vacio
    if (!recetas) return [];

    let recetasFilterArray: RecetaRecetario[] = [];

    //Filtramos si llevan gluten o no
    if (isGlutenFree) {
      recetas.forEach(it => {
        if (it.isGlutenFree) {
          recetasFilterArray.push(it);
        }
      });
    } else {
      recetasFilterArray = recetas;
    }

    //De los que quedan filtramos por texto si hay
    if (!searchText) {
      return recetasFilterArray;
    } else {
      searchText = searchText.toLowerCase();
      let receta = '';
      return recetasFilterArray.filter(it => {
        receta = it.nombre + it.ingredientes + it.cocinero;
        receta = receta.toLowerCase();
        return receta.includes(searchText);
      });
    }
  }

}