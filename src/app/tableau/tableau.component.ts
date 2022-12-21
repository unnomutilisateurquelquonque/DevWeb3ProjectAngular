import { Component, OnInit } from '@angular/core';
import { PersonaService} from '../persona.service'
import { Persona } from '../persona';

@Component({
  selector: 'app-tableau',
  templateUrl: './tableau.component.html',
  styleUrls: ['./tableau.component.css']
})
export class TableauComponent implements OnInit {
  connecter = (localStorage.getItem('connecter')=="true")
  personas: Persona[] = [];

  constructor(private personaService: PersonaService) { }

  ngOnInit(): void {
    this.getPersonas();
    //console.log(this.personas)
  }
  onModifier(persona: Persona): void {
    this.getPersonas();
    //console.log(this.personas)
    localStorage.setItem('personaNom',persona.nom )
    localStorage.setItem('personaLv',persona.lv.toString())
    localStorage.setItem('personaDate',persona.date )
    localStorage.setItem('personaObtenue',persona.obtenue.toString())
    if(persona._id != null){
      localStorage.setItem('personaId',persona._id.toString() )
    }
    localStorage.setItem('personaArcane',persona.arcane)
    localStorage.setItem('personaCompetanceForce',persona.stats.competance.force.toString() )
    localStorage.setItem('personaCompetanceMagique',persona.stats.competance.magique.toString() )
    localStorage.setItem('personaCompetanceEndurance',persona.stats.competance.endurance.toString() )
    localStorage.setItem('personaCompetanceAgilite',persona.stats.competance.agilite.toString() )
    localStorage.setItem('personaCompetanceChance',persona.stats.competance.chance.toString() )
    localStorage.setItem('personaFaiblessPhysique',persona.stats.faibless.physique.toString() )
    localStorage.setItem('personaFaiblessFusil',persona.stats.faibless.fusil.toString() )
    localStorage.setItem('personaFaiblessFeu',persona.stats.faibless.feu.toString() )
    localStorage.setItem('personaFaiblessGlace',persona.stats.faibless.glace.toString() )
    localStorage.setItem('personaFaiblessElectrique',persona.stats.faibless.electrique.toString() )
    localStorage.setItem('personaFaiblessVent',persona.stats.faibless.vent.toString() )
    localStorage.setItem('personaFaiblessPsychique',persona.stats.faibless.psychique.toString() )
    localStorage.setItem('personaFaiblessNucleaire',persona.stats.faibless.nucleaire.toString() )
    localStorage.setItem('personaFaiblessDivin',persona.stats.faibless.divin.toString() )
    localStorage.setItem('personaFaiblessMaledition',persona.stats.faibless.maledition.toString() )
  }
  onSupprimer(id:number): void {
    if(id != null){
      localStorage.setItem('personaId',id.toString() )
    }
  }
  getPersonas(): void {
    this.personaService. getPersonas()
        .subscribe(resultat => this.personas = resultat);
  }

}
