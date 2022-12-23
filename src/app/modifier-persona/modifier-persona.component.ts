import { Component} from '@angular/core';
import { Persona } from '../persona';
import { PersonaService } from '../persona.service';

@Component({
  selector: 'app-modifier-persona',
  templateUrl: './modifier-persona.component.html',
  styleUrls: ['./modifier-persona.component.css']
})

export class ModifierPersonaComponent {
  messageErreur=["","","","","",""];
  erreur = false;
  id = localStorage.getItem('personaId');
  nom = localStorage.getItem('personaNom');
  lv = localStorage.getItem('personaLv');
  arcane = localStorage.getItem('personaArcane');
  date = localStorage.getItem('personaDate');
  obtenue = localStorage.getItem('personaObtenue');
  force = localStorage.getItem('personaCompetanceForce');
  magique = localStorage.getItem('personaCompetanceMagique');
  endurance = localStorage.getItem('personaCompetanceEndurance');
  agilite = localStorage.getItem('personaCompetanceAgilite');
  chance = localStorage.getItem('personaCompetanceChance');
  physique = localStorage.getItem('personaFaiblessPhysique');
  fusil = localStorage.getItem('personaFaiblessFusil');
  feu = localStorage.getItem('personaFaiblessFeu');
  glace = localStorage.getItem('personaFaiblessGlace');
  electrique = localStorage.getItem('personaFaiblessElectrique');
  vent = localStorage.getItem('personaFaiblessVent');
  psychique = localStorage.getItem('personaFaiblessPsychique');
  nucleaire = localStorage.getItem('personaFaiblesNucleaire');
  divin = localStorage.getItem('personaFaiblessDivin');
  maledition =  localStorage.getItem('personaFaiblessMaledition');
  personas: Persona[] = [];
  personaModifier: Persona = {
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

  constructor(private personaService: PersonaService) {}

  ngOnInit() {

    }
  
    onSubmit() {
      this.erreur = false;
      if(this.personaModifier.lv < 1  || this.personaModifier.lv > 99 ){
        this.messageErreur[0] = "Le champ lv doit être entre 1 et 99";
        this.erreur = true;
      }
      if(this.personaModifier.nom == ""){
        this.messageErreur[1] = "Le champ nom ne peut pas être vide";
        this.erreur = true;
      }
      if(this.personaModifier.arcane == ""){
        this.messageErreur[2] = "Le champ arcane ne peut pas être vide";
        this.erreur = true;
      }
      if(this.personaModifier.stats.competance.force < 1 || this.personaModifier.stats.competance.force > 99){
        this.messageErreur[3] = "Les champs dans competance doivent être entre 1 et 99";
        this.erreur = true;
      }
      if(this.personaModifier.stats.competance.magique < 1 || this.personaModifier.stats.competance.magique > 99){
        this.messageErreur[3] = "Les champs dans competance doivent être entre 1 et 99";
        this.erreur = true;
      }
      if(this.personaModifier.stats.competance.endurance < 1 || this.personaModifier.stats.competance.endurance > 99){
        this.messageErreur[3] = "Les champs dans competance doivent être entre 1 et 99";
        this.erreur = true;
      }
      if(this.personaModifier.stats.competance.agilite < 1 || this.personaModifier.stats.competance.agilite > 99){
        this.messageErreur[3] = "Les champs dans competance doivent être entre 1 et 99";
        this.erreur = true;
      }
      if(this.personaModifier.stats.competance.chance < 1 || this.personaModifier.stats.competance.chance > 99){
        this.messageErreur[3] = "Les champs dans competance doivent être entre 1 et 99";
        this.erreur = true;
      }
      if(this.personaModifier.stats.faibless.physique != "","absorbe","nullifier","resist","deflecte"){
        this.messageErreur[4] = "Les champs dans faibless doivent être l'une de ces valeur: vide,absorbe,nullifier,resist,deflecte";
        this.erreur = true;
      }
      if(this.personaModifier.stats.faibless.fusil != "","absorbe","nullifier","resist","deflecte"){
        this.messageErreur[4] = "Les champs dans faibless doivent être l'une de ces valeur: vide,absorbe,nullifier,resist,deflecte";
        this.erreur = true;
      }
      if(this.personaModifier.stats.faibless.feu != "","absorbe","nullifier","resist","deflecte"){
        this.messageErreur[4] = "Les champs dans faibless doivent être l'une de ces valeur: vide,absorbe,nullifier,resist,deflecte";
        this.erreur = true;
      }
      if(this.personaModifier.stats.faibless.glace != "","absorbe","nullifier","resist","deflecte"){
        this.messageErreur[4] = "Les champs dans faibless doivent être l'une de ces valeur: vide,absorbe,nullifier,resist,deflecte";
        this.erreur = true;
      }
      if(this.personaModifier.stats.faibless.electrique != "","absorbe","nullifier","resist","deflecte"){
        this.messageErreur[4] = "Les champs dans faibless doivent être l'une de ces valeur: vide,absorbe,nullifier,resist,deflecte";
        this.erreur = true;
      }
      if(this.personaModifier.stats.faibless.vent != "","absorbe","nullifier","resist","deflecte"){
        this.messageErreur[4] = "Les champs dans faibless doivent être l'une de ces valeur: vide,absorbe,nullifier,resist,deflecte";
        this.erreur = true;
      }
      if(this.personaModifier.stats.faibless.psychique != "","absorbe","nullifier","resist","deflecte"){
        this.messageErreur[4] = "Les champs dans faibless doivent être l'une de ces valeur: vide,absorbe,nullifier,resist,deflecte";
        this.erreur = true;
      }
      if(this.personaModifier.stats.faibless.nucleaire != "","absorbe","nullifier","resist","deflecte"){
        this.messageErreur[4] = "Les champs dans faibless doivent être l'une de ces valeur: vide,absorbe,nullifier,resist,deflecte";
        this.erreur = true;
      }
      if(this.personaModifier.stats.faibless.divin != "","absorbe","nullifier","resist","deflecte"){
        this.messageErreur[4] = "Les champs dans faibless doivent être l'une de ces valeur: vide,absorbe,nullifier,resist,deflecte";
        this.erreur = true;
      }
      if(this.personaModifier.stats.faibless.maledition != "","absorbe","nullifier","resist","deflecte"){
        this.messageErreur[4] = "Les champs dans faibless doivent être l'une de ces valeur: vide,absorbe,nullifier,resist,deflecte";
        this.erreur = true;
      }
      if((this.personaModifier.obtenue) != true,false){
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
        this.personaService.addPersona(this.personaModifier)
            .subscribe(persona  => { this.personas.push(persona);});
      }
    }
}
