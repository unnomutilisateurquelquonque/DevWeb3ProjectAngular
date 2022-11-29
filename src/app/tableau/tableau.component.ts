import { Component, OnInit } from '@angular/core';
import { PersonaService} from '../persona.service'
import { Persona } from '../persona';

@Component({
  selector: 'app-tableau',
  templateUrl: './tableau.component.html',
  styleUrls: ['./tableau.component.css']
})
export class TableauComponent implements OnInit {
  personas: Persona[] = [];
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
    },
  },
  obtenue:false,
  date:""};

  constructor(private personaService: PersonaService) { }

  ngOnInit(): void {
    this.getPersonas();
    console.log(this.personas)
  }
  getPersonas(): void {
    this.personaService. getPersonas()
        .subscribe(resultat => this.personas = resultat);
  }
  /*onAdd(tablePersonas: MatTable<Persona>, PersonaFormAjout: NgForm) {
    if(PersonaFormAjout.valid) {
      this.PersonaService.addPersona(this.nouvellePersona)
          .subscribe(Persona  => { this.Personas.push(Persona); PersonaFormAjout.resetForm(); tablePersonas.renderRows();});
    }
  }*/

}
