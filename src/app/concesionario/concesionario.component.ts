import { Component, OnInit } from '@angular/core';
import { Coche } from '../model/coche';
import { CochesService } from '../providers/coches.service';

@Component({
  selector: 'app-concesionario',
  templateUrl: './concesionario.component.html',
  styleUrls: ['./concesionario.component.scss']
})
export class ConcesionarioComponent implements OnInit {

  stock : Array<Coche>; //array casteado con tipo coche
  coche1: Coche;
  coche2: Coche;

  //en el constructor inicializamos los atributos
  constructor( public cochesService: CochesService) { 
    
    console.log('ConcesionarioComponent constructor');     

    this.coche1 = new Coche('coche1','',4);
    this.coche2 = new Coche('coche2','',4);
    this.stock = new Array<Coche>();


    /******ESTOS DATOS NOS LO PROVEE EL SERVICE*******/
    // this.stock = new Array<Coche>();
    // this.stock.push (new Coche('Seat', 'Panda'));
    // this.stock.push (new Coche('Toyota', 'Verso'));
    // this.stock.push (new Coche('Opel', 'Corsa', '1.7'));
    // this.coche1 = new Coche('','');
    // this.coche2 = new Coche('','');

  }


  //llamadas a los servicios
  ngOnInit() {
    
    console.log('ConcesionarioComponent ngOnInit');    
    this.stock = this.cochesService.getAll();

  }

  recibirCoche(event){

  console.log('ConcesionarioComponent: recibirCoche %o %i', event.coche , event.otroParametro);               
    this.coche2 = this.coche1;
    this.coche1 = event.coche;  
  
  }

}
