import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './componentes/navegacion/login/login.component';
import { LobbyComponent } from './componentes/navegacion/lobby/lobby.component';


const appRoutes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'inicio', component: LoginComponent },
  { path: 'lobby', component: LobbyComponent },
  { path: "**", redirectTo: "/inicio" }

];

@NgModule({
  imports: [RouterModule.forRoot(
    appRoutes,
    { enableTracing: true }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
