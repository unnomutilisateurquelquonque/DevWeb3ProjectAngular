import { Component, OnInit } from '@angular/core';
import { Usager } from '../usager';
import { Location } from '@angular/common';
import * as bcrypt from 'bcryptjs';


@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.css']
})
export class ConnectionComponent implements OnInit {
  showPassword: boolean= false;
  messageErreur = ""
    usager : Usager = {
    nom:"",
    motdepasse:""
  }
  Lusager : Usager = {
    nom:"maxime",
    //motdepasse
    motdepasse:"$2a$10$LC8LBdJemNJQRL.KkoBCjOo82VBL6x.0b0iZWxVzaTTk9CaarpJnu"
  }
  constructor(private location: Location) { }

  ngOnInit(): void {
  }
  onSubmit(): void {
    const verifier = bcrypt.compareSync(this.usager.motdepasse, this.Lusager.motdepasse);
    console.log(verifier);
    if(this.usager.nom == this.Lusager.nom && verifier){
      localStorage.setItem('connecter',"true")
      this.location.replaceState('/');
      this.messageErreur="Vous êtes connectez!"
    }
    else{
      localStorage.setItem('connecter',"false")
      this.messageErreur="Le mot de passe ou le nom de l'usager est incorrecte"
      this.usager.motdepasse="";
    }
  }
}
