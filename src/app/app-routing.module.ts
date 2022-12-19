import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjouterPersonaComponent } from './ajouter-persona/ajouter-persona.component';
import { ModifierPersonaComponent } from './modifier-persona/modifier-persona.component';
import { SupprimerPersonaComponent } from './supprimer-persona/supprimer-persona.component';
import { TableauComponent } from './tableau/tableau.component';

const routes: Routes = [
  { path: 'accueil', component: TableauComponent},
  { path: 'ajouterPersona', component: AjouterPersonaComponent},
  { path: 'modifierPersona', component: ModifierPersonaComponent},
  { path: 'supprimerPersona', component: SupprimerPersonaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
