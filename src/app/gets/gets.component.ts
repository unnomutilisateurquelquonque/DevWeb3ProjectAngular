import { Component} from '@angular/core';
import { PersonaService} from '../persona.service'
import { Persona } from '../persona';

@Component({
  selector: 'app-gets',
  templateUrl: './gets.component.html',
  styleUrls: ['./gets.component.css']
})
export class GetsComponent {
  loadTableau = false;
  messageErreur ="";
  id="";
  lvMin=0;
  lvMax=0;
  connecter = (localStorage.getItem('connecter')=="true")
  personas: Persona[] = [];


  constructor(private personaService: PersonaService) {}

  getId() {
    if(this.id==null){
      this.messageErreur="Le id fournie est vide";
    }
    else{
      this.loadTableau = false;
      this.personas = [];
      this.personaService. getParId(this.id)
          .subscribe(persona  => { this.personas.push(persona);});
      this.loadTableau = true;
    }

  }
  getLv() {
    if(this.lvMax < 0 || this.lvMin < 0){
      this.messageErreur="Le level fornie est négatif";
    }
    else if(this.lvMax<this.lvMin){
      this.messageErreur="Level Max est plus petit que le level minimum";
    }
    else{
      this.loadTableau = false;
      console.log(this.personas);
      this.personas = [];
      this.messageErreur="";
      this.personaService. getLv(this.lvMin,this.lvMax)
          .subscribe(persona  => { this.personas.push(persona);});
      this.loadTableau = true; 
    }
  }
}
