import { Component, OnInit } from '@angular/core';
import { RecetarioService } from '../../providers/recetario.services';
import { RecetaRecetario } from '../../model/recetaRecetario';

/* ****************************************** */
/*   npm install --save-dev jquery            */
/* ****************************************** */
import * as $ from 'jquery';

import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  formulario: FormGroup;
  ingredientes : FormArray; 
  tieneGluten: string;
  gluten = ['Si','No'];
 

  //en el constructor inyectamos el formbuilder para crear formularios, y el servicios
  constructor( private fb:FormBuilder, public recetaService: RecetarioService) {
    console.log('FormComponent constructor');
    this.crearFormulario();
    this.ingredientes = this.formulario.get('ingredientes') as FormArray;   
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
      gluten: ['true', Validators.required],
      ingredientes : this.fb.array( [ this.createIngredienteFormGroup() ],  Validators.required )
    });

  }

  /** 
   * Creamos un FormGroup para los Ingredientes
   * */  
  createIngredienteFormGroup(): FormGroup {
    console.log('FormularioComponent createIngredienteFormGroup');
    return this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(2)]]
    });
  }

   /** 
   * Evento para crear un nuevo Ingrediente
  */
  clickOtroIngrediente(){
  console.log('FormularioComponent clickOtroIngrediente');    
  this.ingredientes.push( this.createIngredienteFormGroup() );
  }

 /** 
   * Evento para crear eliminar un Ingrediente
  */
  clickEliminarIngrediente( index ){
  console.log('FormularioComponent clickEliminarIngrediente');    
    if( this.ingredientes.length > 1 ){    
      this.ingredientes.removeAt(index);
    }  
  }

  enviarReceta():void{
    console.log('FormComponent enviarReceta');

    //todo recoger datos del formulario
    let receta = this.mapearFormularioReceta(this.formulario);
    
    //llamar Servicio
    this.recetaService.crear(receta);

    //Resetar Formulario e Inicializar
    this.formulario.reset({
      gluten : "true",
      imagen : "assets/img/receta_default.jpg"
  });   

    // dejar solo un ingrediente
    this.ingredientes.controls.splice(1);


    //TODO cerrar modal    
    //$("#modalReceta").modal('hide');
    $("#btn-close").click();
  }

    /**
   * Nos retorna las clases para darle estilos al div que contiene el input
   * @param control : FormControl
   */
  estilosInput( control : FormControl ):string{

    const CLASS_ERROR = "form-group has-error";
    const CLASS_SUCCESS = "form-group has-success";

    if ( control.dirty ){
        return (control.valid)?CLASS_SUCCESS:CLASS_ERROR;
    }else{
      return "form-group";
    }
  }

  /**
   * Mapear Los datos del Formulario a una Receta
   * @param form : FormGroup
   */
   mapearFormularioReceta( form : FormGroup ):RecetaRecetario{
      
      let receta = new RecetaRecetario(form.value.nombre);
      receta.cocinero = form.value.cocinero;
      receta.isGlutenFree = ( form.value.gluten === "true" )?false:true;
      receta.foto = form.value.foto;
      receta.descripcion = form.value.descripcion;

      //recuperar los ingredientes
      form.value.ingredientes.map(element => {
        receta.addIngrediente( element.nombre );
      });

      return receta;
   }

}
