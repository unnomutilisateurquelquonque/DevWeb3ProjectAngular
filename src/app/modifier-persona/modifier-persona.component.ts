import { Component} from '@angular/core';
import { Persona } from '../persona';
import { PersonaService } from '../persona.service';

@Component({
  selector: 'app-modifier-persona',
  templateUrl: './modifier-persona.component.html',
  styleUrls: ['./modifier-persona.component.css']
})

export class ModifierPersonaComponent {
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
 /* personaForm = new FormGroup({
    lv: new FormControl(''),
    lastName: new FormControl(''),
    arcane: new FormControl(''),
    stats: new FormGroup({
      competances: new FormGroup({
        force: new FormControl(''),
        magique: new FormControl(''),
        endurance: new FormControl(''),
        resistance: new FormControl(''),
        chance: new FormControl('')
      }),
      faibless: new FormGroup({
        physique: new FormControl(''),
        fusil: new FormControl(''),
        feu: new FormControl(''),
        glace: new FormControl(''),
        electrique: new FormControl(''),
        vent: new FormControl(''),
        psychique: new FormControl(''),
        nucleaire: new FormControl(''),
        divin: new FormControl(''),
        malediction: new FormControl(''),
      }),
    })
  });*/
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
    if(this.id==null){
      this.id = "0";
    }
    console.log(this.personaModifier);
      this.personaService.updatePersona(this.personaModifier,this.id)
          .subscribe(persona  => { this.personas.push(persona);});
  }
}
