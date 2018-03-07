import { Component, OnInit } from '@angular/core';
import { RecetarioService } from '../../providers/recetario.services';
import { RecetaRecetario } from '../../model/recetaRecetario';
import * as $ from 'jquery';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  formulario: FormGroup;
  tieneGluten: string;
  gluten = ['Si','No'];
 

  //en el constructor inyectamos el formbuilder para crear formularios, y el servicios
  constructor( private fb:FormBuilder, public recetaService: RecetarioService) {
    console.log('FormComponent constructor');
    this.crearFormulario();
   }

  ngOnInit() {
    console.log('FormComponent ngOnInit');
  }

  crearFormulario():void{
    

    console.log('FormComponent crearFormulario');
    this.formulario = this.fb.group({
      //formControl parecido a un input => ['value',[validaciones]]
      nombre:['',[Validators.required, Validators.minLength(2)]],
      cocinero:['',[Validators.minLength(5)]],
      foto:['assets/img/receta_default.jpg',[Validators.minLength(5)]],
      descripcion:['',[Validators.required, Validators.minLength(1)]],
      gluten: ['true', Validators.required]  
    });

  }

  enviarReceta():void{
    console.log('FormComponent enviarReceta');

    //todo recoger datos del formulario

    let receta = new RecetaRecetario(
      this.formulario.value.nombre ,
      this.formulario.value.cocinero,
      this.formulario.value.foto,
      this.formulario.value.descripcion
    );
    this.recetaService.crear(receta);

    //cerrar modal
    $('#btn_close').click();
  }
}
