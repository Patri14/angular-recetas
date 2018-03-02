import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Coche } from '../../model/coche';


@Component({
  selector: 'app-coche',
  templateUrl: './coche.component.html',
  styleUrls: ['./coche.component.scss']
})
export class CocheComponent implements OnInit {

  //parámetro de entrada desde componente padre al hijo
  @Input('cocheParametro') coche: Coche;

 


  constructor() { }

  ngOnInit() {
  }



}
