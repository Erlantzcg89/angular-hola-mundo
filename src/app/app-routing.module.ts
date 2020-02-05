import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './componentes/navegacion/login/login.component';
import { LobbyComponent } from './componentes/navegacion/lobby/lobby.component';
import { SeleccionPersonajesComponent } from './componentes/seleccion-personajes/seleccion-personajes.component';
import { ArenaComponent } from './componentes/arena/arena.component';
import { TourOfHeroesComponent } from './paginas/tour-of-heroes/tour-of-heroes.component';
import { ArraysComponent } from './paginas/arrays/arrays.component';
import { PokemonRestComponent } from './paginas/pokemon-rest/pokemon-rest.component';
import { ErlantzRestComponent } from './paginas/erlantz-rest/erlantz-rest.component';
import { EstilosSassComponent } from './paginas/estilos-sass/estilos-sass.component';
import { JuegoClickerComponent } from './paginas/juego-clicker/juego-clicker.component';
import { DirectivasComponent } from './paginas/directivas/directivas.component';
import { FiltrosComponent } from './paginas/filtros/filtros.component';


const appRoutes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'inicio', component: LoginComponent },
  { path: 'directivas', component: DirectivasComponent },
  { path: 'filtros', component: FiltrosComponent },
  { path: 'juego-clicker', component: JuegoClickerComponent },
  { path: 'estilos-sass', component: EstilosSassComponent },
  { path: 'arrays', component: ArraysComponent },
  { path: 'pokemon-rest', component: PokemonRestComponent },
  { path: 'erlantz-rest', component: ErlantzRestComponent },
  { path: 'tour-of-heroes', component: TourOfHeroesComponent },
  { path: 'lobby', component: LobbyComponent },
  { path: 'seleccion-de-personaje', component: SeleccionPersonajesComponent },
  { path: 'arena', component: ArenaComponent },
  { path: '**', redirectTo: "/inicio" }

];

@NgModule({
  imports: [RouterModule.forRoot(
    appRoutes,
    { enableTracing: true }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
