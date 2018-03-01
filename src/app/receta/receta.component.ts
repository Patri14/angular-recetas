import { Component, OnInit } from '@angular/core';
import { Receta } from '../model/receta'
@Component({
  selector: 'app-receta',
  templateUrl: './receta.component.html',
  styleUrls: ['./receta.component.scss']
})
export class RecetaComponent implements OnInit {

  //atributos

  arrowUpDown:boolean;
  glyphicon:string;
  isCollapsed:boolean;
  show:boolean;

  receta: Receta;
  
//en el constructor siempre se inicializan los atributos
  constructor() {
    console.log('RecetaComponent constructor');
  
    this.arrowUpDown = true;
    this.show = false;
    this.glyphicon = "glyphicon-chevron-down";

    this.receta = new Receta('Marmitako','Karlos Arguiñano');
    this.receta.addIngrediente('bonito');
    this.receta.addIngrediente('pimiento verde');
    this.receta.addIngrediente('aceite');
    this.receta.addIngrediente('pimiento choricero');
    this.receta.addIngrediente('patatas');
   }

  ngOnInit() {
    console.log('RecetaComponent constructor');
    
    
  }

  sumarLike(){
    this.receta.likes++;
    console.log(this.receta.likes);
    
  }

  showIngredientes(){
    console.log('Click showIngredientes');
    this.show = !this.show;
    this.glyphicon = ( this.show )?'glyphicon-chevron-up':'glyphicon-chevron-down';
  }

}
