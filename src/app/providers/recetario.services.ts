import { Injectable } from '@angular/core';
import { RecetaRecetario } from '../model/recetaRecetario';
import { MOCKS_RECETARIO } from './mocks.recetario';
import { element } from 'protractor';

@Injectable()
export class RecetarioService {

 //declaro una variable, de tipo array de recetas, y la inicializo vacía
  aReceta:RecetaRecetario[] = [];

  receta;
  ingredientes;
constructor() {

  console.log('RecetarioService constructor');

}

   /***Retorna todos las recetas que tenemos en recetario***/
getAll() : RecetaRecetario[]{
    
 
    
    let jsonData = JSON.parse(MOCKS_RECETARIO.recetario);

    jsonData.forEach( element => {

        this.receta = new RecetaRecetario( 
                         
                          element.nombre, 
                          element.cocinero, 
                          element.likes,
                          element.foto,
                          element.ingredientes,
                          element.descripcion,
                          element.isGlutenFree,
                          element.id
                          
                          );
                         this.aReceta.push(this.receta);

                        });
                    
      return this.aReceta;
  
  }

  /** Crear nueva receta
   * @param receta : nuevaReceta
   */
  crear (receta: RecetaRecetario):void{
    this.aReceta.unshift(receta);

  }
}
