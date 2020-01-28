import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/navegacion/login/login.component';
import { LobbyComponent } from './componentes/navegacion/lobby/lobby.component';
import { SeleccionPersonajesComponent } from './componentes/seleccion-personajes/seleccion-personajes.component';
import { ArenaComponent } from './componentes/arena/arena.component';
import { TourOfHeroesComponent } from './paginas/tour-of-heroes/tour-of-heroes.component';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { ArraysComponent } from './paginas/arrays/arrays.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { PokemonRestComponent } from './paginas/pokemon-rest/pokemon-rest.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LobbyComponent,
    SeleccionPersonajesComponent,
    ArenaComponent,
    TourOfHeroesComponent,
    InicioComponent,
    ArraysComponent,
    NavbarComponent,
    PokemonRestComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
