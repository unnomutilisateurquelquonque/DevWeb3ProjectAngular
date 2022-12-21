import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { MatTableModule } from '@angular/material/table';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableauComponent } from './tableau/tableau.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EnteteComponent } from './entete/entete.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormComponent } from './form/form.component';
import { FormsModule } from '@angular/forms';
import { AjouterPersonaComponent } from './ajouter-persona/ajouter-persona.component';
import { ModifierPersonaComponent } from './modifier-persona/modifier-persona.component';
import { SupprimerPersonaComponent } from './supprimer-persona/supprimer-persona.component';
import { ConnectionComponent } from './connection/connection.component';
import { GetsComponent } from './gets/gets.component';

@NgModule({
  declarations: [
    AppComponent,
    TableauComponent,
    EnteteComponent,
    FormComponent,
    AjouterPersonaComponent,
    ModifierPersonaComponent,
    SupprimerPersonaComponent,
    ConnectionComponent,
    GetsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
