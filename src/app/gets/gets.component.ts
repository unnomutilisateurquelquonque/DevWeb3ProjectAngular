import { Component } from '@angular/core';
import { PersonaService } from '../persona.service'
import { Persona } from '../persona';

@Component({
  selector: 'app-gets',
  templateUrl: './gets.component.html',
  styleUrls: ['./gets.component.css']
})
export class GetsComponent {
  obtenue = ""
  loadTableau = false;
  messageErreur = ["","","","",""];
  arcane = "";
  id = null;
  lvMin = 0;
  lvMax = 0;
  connecter = (localStorage.getItem('connecter') == "true")
  personas: Persona[] = [];


  constructor(private personaService: PersonaService) { }
  //get une persona par ID
  getId() {
    if (this.id == null) {
      this.messageErreur[0] = "Le id fournie est vide";
    }
    else {
      this.messageErreur[0] = "";
      this.loadTableau = false;
      this.personas = [];
      this.personaService.getParId(this.id)
        .subscribe(persona => { this.personas.push(persona); });
      this.loadTableau = true;
    }

  }

  //get les personas entre deux niveaux
  getLv() {
    if (this.lvMax < 0 || this.lvMin < 0) {
      this.messageErreur[1] = "Le level fornie est négatif";
    }
    else if (this.lvMax < this.lvMin) {
      this.messageErreur[1] = "Level Max est plus petit que le level minimum";
    }
    else {
      this.loadTableau = false;
      console.log(this.personas);
      this.personas = [];
      this.messageErreur[1] = "";
      this.personaService.getLv(this.lvMin, this.lvMax)
        .subscribe(persona => { this.personas.push(persona); });
      this.loadTableau = true;
    }
  }

  //get les persona d'une arcane
  getArcane() {
    if (this.arcane == "") {
      this.messageErreur[2] = "L'arcane n'est pas fournie";
      this.arcane = "";
    }
    else {
      this.loadTableau = false;
      console.log(this.personas);
      this.personas = [];
      this.messageErreur[2] = "";
      this.personaService.getArcane(this.arcane)
        .subscribe(persona => { this.personas.push(persona); });
      this.loadTableau = true;
      this.arcane = "";
    }
  }

    //get les persona d'une arcane
    getNbArcane() {
      if (this.arcane == "") {
        this.messageErreur[3] = "L'arcane n'est pas fournie";
        this.arcane = "";
      }
      else {
        this.loadTableau = false;
        console.log(this.personas);
        this.personas = [];
        this.messageErreur[3] = "";
        this.personaService.getNbArcane(this.arcane)
          .subscribe(persona => { this.personas.push(persona); });
        this.loadTableau = true;
        this.arcane = "";
      }
    }
    //get le nombre de persona obtenue ou celle non obetnue
    getNbObtenue() {
      if (this.obtenue == "true" || this.obtenue == "false") {
        this.loadTableau = false;
        console.log(this.personas);
        this.personas = [];
        this.messageErreur[4] = "";
        this.personaService.getNbObtenue(this.arcane)
          .subscribe(persona => { this.personas.push(persona); });
        this.loadTableau = true;
      }
      else {
        this.messageErreur[4] = "Obtenue prend seulement true ou false en valeur";
      }
    }
}
