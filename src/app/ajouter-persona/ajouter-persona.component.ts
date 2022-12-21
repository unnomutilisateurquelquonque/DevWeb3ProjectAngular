import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ajouter-persona',
  templateUrl: './ajouter-persona.component.html',
  styleUrls: ['./ajouter-persona.component.css']
})
export class AjouterPersonaComponent implements OnInit {
  connecter = (localStorage.getItem('connecter')=="true")
  constructor() { }

  ngOnInit(): void {
  }

}
