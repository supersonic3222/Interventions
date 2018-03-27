import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ProblemeComponent } from './probleme/probleme.component';

const routes: Routes = [
  { path:'probleme', component:ProblemeComponent},
  { path:'accueil', component:AccueilComponent},
      { path:'', redirectTo:'accueil', pathMatch:'full'},
      { path:'**', redirectTo:'accueil', pathMatch:'full'}, //Si la route est inexistante, rediriger vers l'accueil.
      
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
