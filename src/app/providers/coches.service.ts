import { Injectable } from '@angular/core';
import { Coche } from '../model/coche';
import { MOCKS_COCHES } from './mocks.coches';
import { element } from 'protractor';

@Injectable()
export class CochesService {

constructor() {

  console.log('CochesService constructor');

}

   /***Retorna todos los coches que tenemos en stock***/
getAll() : Coche[]{
    
  //declaro una variable, de tipo array de coches, y la inicializo vacía
    let coches:Coche[] = [];

    let coche;
    
    let jsonData = JSON.parse(MOCKS_COCHES.stock);

    jsonData.forEach( element => {
      
        coche = new Coche( 
                          element.marca, 
                          element.modelo, 
                          element.puertas,
                          element.foto,
                          element.version,
                          element.caballos,
                          element.consumo,
                          element.id

                          );

                          coches.push(coche);

                        });
                    
      return coches;
  
  }
}
