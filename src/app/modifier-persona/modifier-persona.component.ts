import { Component} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Persona } from '../persona';
import { PersonaService } from '../persona.service';

@Component({
  selector: 'app-modifier-persona',
  templateUrl: './modifier-persona.component.html',
  styleUrls: ['./modifier-persona.component.css']
})

export class ModifierPersonaComponent {
  leId:string = "";
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

  constructor(private personaService: PersonaService, private route: ActivatedRoute ) {}

  ngOnInit() {
    this.route.queryParams
      .subscribe(params => {
        console.log(params);
        this.leId = params['id'];
      });
    }
  
  onSubmit() {
    console.log(this.personaModifier);
      this.personaService.updatePersona(this.personaModifier,this.leId)
          .subscribe(persona  => { this.personas.push(persona);});
  }
}
