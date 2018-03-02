import { Component, OnInit } from '@angular/core';
import { Usuario } from '../model/usuario';
import { Sexo } from '../model/usuario';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {
    
  usuario:Usuario;

  constructor() { 

    this.usuario = new Usuario('Patricio');
   
    this.usuario.id = 20;
    this.usuario.avatar = '../../assets/img/patricio.jpg';
    this.usuario.apellido = 'Pérez'
    this.usuario.email = 'patriciobajoelmar@gmail.com';
    this.usuario.sexo = Sexo.MASCULINO;
    
  
  }

  ngOnInit() {
    console.log('UsuarioComponent constructor');
  }

}
