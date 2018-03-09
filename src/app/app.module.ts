import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//nuestro módulo para navegación
import { AppRoute } from './app.route';

//componentes
import { AppComponent } from './app.component';
import { RecetaComponent } from './receta/receta.component';
import { PropiedadesComponent } from './propiedades/propiedades.component';
import { Page404Component } from './page404/page404.component';
import { HomeComponent } from './home/home.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { CocheComponent } from './concesionario/coche/coche.component';
import { ConcesionarioComponent } from './concesionario/concesionario.component';
import { ListadoComponent } from './concesionario/listado/listado.component';
import { RecetarioComponent } from './recetario/recetario.component';
import { RecetaDetalleComponent } from './recetario/receta-detalle/receta-detalle.component';
import { TodosComponent } from './todos/todos.component';

//formularios
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FormularioComponent } from './recetario/formulario/formulario.component';

//pipes
import { FilterPipe } from './pipe/filter.pipe';
import { RecetaFilter } from './pipe/recetaFilter.pipe';
import { RoundPipe } from './pipe/redondear.pipe';

//services
import { CochesService } from './providers/coches.service';
import { RecetarioService } from './providers/recetario.services';
import { PlantillaComponent } from './plantilla/plantilla.component';

import { TodosService } from './providers/todos.service';

// Importar HttpClientModule
import {HttpClientModule} from '@angular/common/http';





@NgModule({
  declarations: [
    AppComponent,
    RecetaComponent,
    PropiedadesComponent,
    Page404Component,
    HomeComponent,
    UsuarioComponent,
    CocheComponent,
    ConcesionarioComponent,
    ListadoComponent,
    RoundPipe,
    FilterPipe,
    RecetarioComponent,
    RecetaDetalleComponent,
    RecetaFilter,
    FormularioComponent,
    PlantillaComponent,
    TodosComponent  
  ],
  imports: [
    BrowserModule,
    AppRoute,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule // para servicios rest
  ],
  providers: [
    HttpClientModule, // para servicios rest
    CochesService,
    RecetarioService,
    TodosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
