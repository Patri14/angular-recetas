import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Coche } from '../../model/coche';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit {

  @Input('stockParametro') stock: Array<Coche>;

  //parámetros de salida se realizan a traves de eventos
  @Output() eventoEmitir = new EventEmitter();
  
  coche2:Coche;
  coche1:Coche;

  //criterio del buscador
  searchText : string;
  

  constructor() { }

  ngOnInit() { }

    //función para emitir el evento desde el hijo hasta el padre
    seleccionar($event, coche: Coche){

      console.log('ListadoComponent emitimos evento al padre %o ', coche);
      
      //al evento que emito le paso el propio coche, el parámetro que le paso del hijo al padre
      this.eventoEmitir.emit({coche: coche});
      
      this.coche2 = this.coche1;
      this.coche1 = coche;      
    }

}
