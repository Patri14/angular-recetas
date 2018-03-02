import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

//componentes

import { RecetaComponent } from './receta/receta.component';
import { PropiedadesComponent } from './propiedades/propiedades.component';
import { Page404Component } from './page404/page404.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { HomeComponent } from './home/home.component';
import { ConcesionarioComponent } from './concesionario/concesionario.component';

//rutas de nuestra app
const appRoutes: Routes = [
    { path: 'receta',       component: RecetaComponent },
    { path: 'propiedades',  component: PropiedadesComponent }, 
    { path: 'usuario',  component: UsuarioComponent },
    { path: 'concesionario',  component: ConcesionarioComponent }, 
    { path: '',    component: HomeComponent },
    { path: 'home',    component: HomeComponent },
    { path: '**',           component: Page404Component }
    
  ];


  export const AppRoute = RouterModule.forRoot(appRoutes);
  