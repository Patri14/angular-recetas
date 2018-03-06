import { Component, OnInit, Input} from '@angular/core';
import { RecetaRecetario } from '../../model/recetaRecetario';

@Component({
  selector: 'app-receta-detalle',
  templateUrl: './receta-detalle.component.html',
  styleUrls: ['./receta-detalle.component.scss']
})
export class RecetaDetalleComponent implements OnInit {
  
  @Input ('recetaDelInput') receta :RecetaRecetario;

  
  constructor() {
    console.log('RecetaDetalleComponent constructor');
   }

  ngOnInit() {
    console.log('RecetadetalleComponent ngOnInit');
  }



}


