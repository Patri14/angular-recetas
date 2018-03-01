import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-propiedades',
  templateUrl: './propiedades.component.html',
  styleUrls: ['./propiedades.component.scss']
})
export class PropiedadesComponent implements OnInit {

  //atributos
  ocultar: boolean;
  color: string;
  
  constructor() {
    console.log('propiedadesComponent constructor');
    this.ocultar = true;
    this.color= "pink";
  
   }

  ngOnInit() {
  }

}
