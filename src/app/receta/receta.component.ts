import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-receta',
  templateUrl: './receta.component.html',
  styleUrls: ['./receta.component.scss']
})
export class RecetaComponent implements OnInit {

  //atributos
  nombre:string;
  foto:string;
  likes:number;
  descripcion:string;
  isGlutenFree:boolean;
  cocinero:string;
  ingredientes:string[];

//en el constructor siempre se inicializan los atributos
  constructor() {
    console.log('RecetaComponent constructor');
    this.nombre = 'Bocata de calamares';
    this.foto = 'https://masdemadrid.com/wp-content/uploads/2017/03/bocadillo-calamares-560x314.jpg';
    this.likes = 23;
    this.descripcion = 'Más que la pepitoria, las bravas, e incluso que los callos, los bocatas de calamares son el símbolo culinario de Madrid. Rápidos, baratos y proletarios, a fuerza de alimentar buches e ilusiones en la posguerra se convirtieron en un icono de la ciudad: el bocado más castizo';
    this.isGlutenFree= true;
    this.cocinero= "Karlos Arguiñano";
    this.ingredientes=["calamares", "limón","harina","pan"];
   }

  ngOnInit() {
    console.log('RecetaComponent constructor');
    
    
  }

  sumarLike(){
    this.likes++;
    console.log(this.likes++);
    
  }

}
