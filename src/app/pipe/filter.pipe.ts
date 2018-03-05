import { Pipe, PipeTransform } from '@angular/core';
import{ Coche } from '../model/coche'

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
/**
 * Esto es un filtro para buscar en una colección de coches, no es case sensitive, por lo que dan igual may y min
 * @param stock - array de Coche[]
 * @param searchText - string con la marca o modelo del coche
 */

  transform(stock: Coche[], searchText: string): Coche[] {

    //si no hay stock te devuelvo un array vacío
    if(!stock) return [];

    //si no hay marca o modelo me devuelve el array
    if(!searchText) return stock;

    //convierte el texto de la marca o modelo a minúsculas
    searchText = searchText.toLowerCase();

    let marcaModelo = '';

    //para poder filtrar la colección de datos, el it sería la i, sobre lo que iteras
    return stock.filter( cocheIt => {

        marcaModelo = cocheIt.marca +" " + cocheIt.modelo;
        marcaModelo = marcaModelo.toLowerCase ();



        //si el criterio de busqueda está dentro de la marca lo devuelve, si no está no lo devuelve 
        return marcaModelo.includes(searchText);
    });
   }

}