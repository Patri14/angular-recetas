import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//nuestro módulo para navegación
import { AppRoute } from './app.route';

//modulo de pipe
import{ RoundPipe } from './pipe/redondear.pipe';

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
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './pipe/filter.pipe';


//services
import { CochesService } from './providers/coches.service';
import { RecetarioComponent } from './recetario/recetario.component';
import { RecetaDetalleComponent } from './recetario/receta-detalle/receta-detalle.component';


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
    RecetaDetalleComponent  ],
  imports: [
    BrowserModule,
    AppRoute,
    FormsModule
  ],
  providers: [
    CochesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
