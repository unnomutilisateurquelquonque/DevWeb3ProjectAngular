import { Component, OnInit } from '@angular/core';
import { PersonaService } from '../persona.service';
import { Persona } from '../persona';

@Component({
  selector: 'app-supprimer-persona',
  templateUrl: './supprimer-persona.component.html',
  styleUrls: ['./supprimer-persona.component.css']
})
export class SupprimerPersonaComponent implements OnInit {
  id = localStorage.getItem('personaId');
  personas: Persona[] = [];

  constructor(private personaService: PersonaService) {}

  ngOnInit(): void {
  }
  onConfirmation():void{
    if(this.id==null){
      this.id = "0";
    }
    this.personaService.deletePersona(this.id)
    .subscribe(persona  => { this.personas.push(persona);});
  }
}
