import { Component, OnInit } from '@angular/core';
import { Persona } from '../persona';
import { PersonaService } from '../persona.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent {
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
    console.log(this.nouvellePersona);
      this.personaService.addPersona(this.nouvellePersona)
          .subscribe(persona  => { this.personas.push(persona);});
  }
}
