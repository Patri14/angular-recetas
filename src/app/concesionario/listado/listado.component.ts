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
  constructor() { }

  ngOnInit() {
  }

    //función para emitir el evento desde el hijo hasta el padre
    seleccionar($event, coche: Coche){

      console.log('ListadoComponent emitimos evento al padre %o ', this.eventoEmitir);
      //al evento que emito le paso el propio coche, el parámetro que le paso del hijo al padre
      this.eventoEmitir.emit({coche: this.eventoEmitir});
      
      
    }

}
