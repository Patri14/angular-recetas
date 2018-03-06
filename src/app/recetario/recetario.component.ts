import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { RecetaRecetario } from '../model/recetaRecetario';
import { RecetarioService } from '../providers/recetario.services';

@Component({
  selector: 'app-recetario',
  templateUrl: './recetario.component.html',
  styleUrls: ['./recetario.component.scss']
})
export class RecetarioComponent implements OnInit {

  aReceta : Array<RecetaRecetario>; //array casteado con tipo receta

  recetaSelec :RecetaRecetario;

 

  //en el constructor inicializamos los atributos
  //inyectamos para poder usar este servicio en recetas
  constructor( public recetarioService: RecetarioService) { 
    
    console.log('RecetarioComponent constructor');     
  
    this.aReceta = new Array<RecetaRecetario>();
   

}

//llamadas a los servicios
ngOnInit() {
    
    console.log('RecetarioComponent ngOnInit');    
    this.aReceta = this.recetarioService.getAll();

    //si no existe la receta creo una receta anonima
    this.recetaSelec = this.aReceta[0] || new RecetaRecetario('Anónimo', '');
   }

   //esta receta la recibe el hijo como input
   seleccionarReceta( recetaDelInput : RecetaRecetario ){
    console.log('RecetarioComponent seleccionarReceta');
    this.recetaSelec = recetaDelInput;
  }
}
