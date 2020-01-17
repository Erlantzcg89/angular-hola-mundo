import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/navegacion/login/login.component';
import { LobbyComponent } from './componentes/navegacion/lobby/lobby.component';
import { SeleccionPersonajesComponent } from './componentes/seleccion-personajes/seleccion-personajes.component';
import { ArenaComponent } from './componentes/arena/arena.component';
import { TourOfHeroesComponent } from './tour-of-heroes/tour-of-heroes.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LobbyComponent,
    SeleccionPersonajesComponent,
    ArenaComponent,
    TourOfHeroesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
