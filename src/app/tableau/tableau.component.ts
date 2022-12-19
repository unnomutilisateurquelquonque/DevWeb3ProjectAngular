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

  constructor(private personaService: PersonaService) { }

  ngOnInit(): void {
    this.getPersonas();
    //console.log(this.personas)
  }
  getPersonas(): void {
    this.personaService. getPersonas()
        .subscribe(resultat => this.personas = resultat);
  }

}
