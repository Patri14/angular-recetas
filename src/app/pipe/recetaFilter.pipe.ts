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
  transform(aReceta: RecetaRecetario[], searchText: string): RecetaRecetario[] {

    if(!aReceta) return [];
    if(!searchText) return aReceta;
    searchText = searchText.toLowerCase();
    let nombreReceta = "";
    return aReceta.filter( recetaIt => {
        nombreReceta = recetaIt.nombre;        
        nombreReceta = nombreReceta.toLowerCase();
        return nombreReceta.includes(searchText);
    });
   }

}