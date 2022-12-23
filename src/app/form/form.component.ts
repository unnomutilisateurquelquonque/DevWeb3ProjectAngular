import { Component, OnInit } from '@angular/core';
import { Persona } from '../persona';
import { PersonaService } from '../persona.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent {
  messageErreur=["","","","","",""];
  personas: Persona[] = [];
  erreur = false;
  nouvellePersona: Persona = {
    lv:0,
    nom:"",
    arcane:"",
    stats:{
      competance:{
        force: 0,
        magique: 0,
        endurance: 0,
        agilite: 0,
        chance: 0,
      },
      faibless:{
        physique:"",
        fusil:"",
        feu:"",
        glace:"",
        electrique:"",
        vent:"",
        psychique:"",
        nucleaire:"",
        divin:"",
        maledition:"",
      }
    },
    obtenue: true,
    date: Date.now().toString(),
  }

  constructor(private personaService: PersonaService ) {}

  onSubmit() {
    this.erreur = false;
    if(this.nouvellePersona.lv < 1  || this.nouvellePersona.lv > 99 ){
      this.messageErreur[0] = "Le champ lv doit être entre 1 et 99";
      this.erreur = true;
    }
    if(this.nouvellePersona.nom == ""){
      this.messageErreur[1] = "Le champ nom ne peut pas être vide";
      this.erreur = true;
    }
    if(this.nouvellePersona.arcane == ""){
      this.messageErreur[2] = "Le champ arcane ne peut pas être vide";
      this.erreur = true;
    }
    if(this.nouvellePersona.stats.competance.force < 1 || this.nouvellePersona.stats.competance.force > 99){
      this.messageErreur[3] = "Les champs dans competance doivent être entre 1 et 99";
      this.erreur = true;
    }
    if(this.nouvellePersona.stats.competance.magique < 1 || this.nouvellePersona.stats.competance.magique > 99){
      this.messageErreur[3] = "Les champs dans competance doivent être entre 1 et 99";
      this.erreur = true;
    }
    if(this.nouvellePersona.stats.competance.endurance < 1 || this.nouvellePersona.stats.competance.endurance > 99){
      this.messageErreur[3] = "Les champs dans competance doivent être entre 1 et 99";
      this.erreur = true;
    }
    if(this.nouvellePersona.stats.competance.agilite < 1 || this.nouvellePersona.stats.competance.agilite > 99){
      this.messageErreur[3] = "Les champs dans competance doivent être entre 1 et 99";
      this.erreur = true;
    }
    if(this.nouvellePersona.stats.competance.chance < 1 || this.nouvellePersona.stats.competance.chance > 99){
      this.messageErreur[3] = "Les champs dans competance doivent être entre 1 et 99";
      this.erreur = true;
    }
    if(this.nouvellePersona.stats.faibless.physique != "","absorbe","nullifier","resist","deflecte"){
      this.messageErreur[4] = "Les champs dans faibless doivent être l'une de ces valeur: vide,absorbe,nullifier,resist,deflecte";
      this.erreur = true;
    }
    if(this.nouvellePersona.stats.faibless.fusil != "","absorbe","nullifier","resist","deflecte"){
      this.messageErreur[4] = "Les champs dans faibless doivent être l'une de ces valeur: vide,absorbe,nullifier,resist,deflecte";
      this.erreur = true;
    }
    if(this.nouvellePersona.stats.faibless.feu != "","absorbe","nullifier","resist","deflecte"){
      this.messageErreur[4] = "Les champs dans faibless doivent être l'une de ces valeur: vide,absorbe,nullifier,resist,deflecte";
      this.erreur = true;
    }
    if(this.nouvellePersona.stats.faibless.glace != "","absorbe","nullifier","resist","deflecte"){
      this.messageErreur[4] = "Les champs dans faibless doivent être l'une de ces valeur: vide,absorbe,nullifier,resist,deflecte";
      this.erreur = true;
    }
    if(this.nouvellePersona.stats.faibless.electrique != "","absorbe","nullifier","resist","deflecte"){
      this.messageErreur[4] = "Les champs dans faibless doivent être l'une de ces valeur: vide,absorbe,nullifier,resist,deflecte";
      this.erreur = true;
    }
    if(this.nouvellePersona.stats.faibless.vent != "","absorbe","nullifier","resist","deflecte"){
      this.messageErreur[4] = "Les champs dans faibless doivent être l'une de ces valeur: vide,absorbe,nullifier,resist,deflecte";
      this.erreur = true;
    }
    if(this.nouvellePersona.stats.faibless.psychique != "","absorbe","nullifier","resist","deflecte"){
      this.messageErreur[4] = "Les champs dans faibless doivent être l'une de ces valeur: vide,absorbe,nullifier,resist,deflecte";
      this.erreur = true;
    }
    if(this.nouvellePersona.stats.faibless.nucleaire != "","absorbe","nullifier","resist","deflecte"){
      this.messageErreur[4] = "Les champs dans faibless doivent être l'une de ces valeur: vide,absorbe,nullifier,resist,deflecte";
      this.erreur = true;
    }
    if(this.nouvellePersona.stats.faibless.divin != "","absorbe","nullifier","resist","deflecte"){
      this.messageErreur[4] = "Les champs dans faibless doivent être l'une de ces valeur: vide,absorbe,nullifier,resist,deflecte";
      this.erreur = true;
    }
    if(this.nouvellePersona.stats.faibless.maledition != "","absorbe","nullifier","resist","deflecte"){
      this.messageErreur[4] = "Les champs dans faibless doivent être l'une de ces valeur: vide,absorbe,nullifier,resist,deflecte";
      this.erreur = true;
    }
    if((this.nouvellePersona.obtenue) != true,false){
      this.messageErreur[5] = "Le champ obtenue prend seulement les valeurs true ou false";
      this.erreur = true;
    }
    if(this.erreur == false){
      this.messageErreur[0] = "";
      this.messageErreur[1] = "";
      this.messageErreur[2] = "";
      this.messageErreur[3] = "";
      this.messageErreur[4] = "";
      this.messageErreur[5] = "";
      this.personaService.addPersona(this.nouvellePersona)
          .subscribe(persona  => { this.personas.push(persona);});
    }
  }
}
