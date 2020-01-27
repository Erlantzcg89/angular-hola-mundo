import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './componentes/navegacion/login/login.component';
import { LobbyComponent } from './componentes/navegacion/lobby/lobby.component';
import { SeleccionPersonajesComponent } from './componentes/seleccion-personajes/seleccion-personajes.component';
import { ArenaComponent } from './componentes/arena/arena.component';
import { TourOfHeroesComponent } from './paginas/tour-of-heroes/tour-of-heroes.component';
import { ArraysComponent } from './paginas/arrays/arrays.component';


const appRoutes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'inicio', component: LoginComponent },
  { path: 'arrays', component: ArraysComponent },
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
