import { Injectable } from '@angular/core';
import { RecetaRecetario } from '../model/recetaRecetario';
import { MOCKS_RECETARIO } from './mocks.recetario';
import { element } from 'protractor';

@Injectable()
export class RecetarioService {

constructor() {

  console.log('RecetarioService constructor');

}

   /***Retorna todos las recetas que tenemos en recetario***/
getAll() : RecetaRecetario[]{
    
  //declaro una variable, de tipo array de recetas, y la inicializo vacía
    let aReceta:RecetaRecetario[] = [];

    let recetaIndividual;
    let ingredientes;
    
    let jsonData = JSON.parse(MOCKS_RECETARIO.recetario);

    jsonData.forEach( element => {

        recetaIndividual = new RecetaRecetario( 
                         
                          element.nombre, 
                          element.cocinero, 
                          element.likes,
                          element.foto,
                          element.ingredientes,
                          element.descripcion,
                          element.isGlutenFree,
                          element.id
                          
                          );
                         aReceta.push(recetaIndividual);

                        });
                    
      return aReceta;
  
  }
}
