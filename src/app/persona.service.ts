import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Persona } from './persona';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  PersonasUrl = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }

  getPersonas(): Observable<Persona[]> {
    return this.http.get<Persona[]>(this.PersonasUrl + 'persona');  
  }
  getMoyennePersona(anneDebut: string, anneFin: string): Observable<Persona> {
    return this.http.get<Persona>(this.PersonasUrl + 'persona/' + anneDebut + anneFin, httpOptions);
  }
  addPersona(persona: Persona): Observable<Persona> {
    console.log("add");
    console.log(persona);
    return this.http.post<Persona>(this.PersonasUrl + 'persona/', persona, httpOptions);
  }
  updatePersona(persona: Persona,id: string): Observable<any> {
    return this.http.put<Persona>(this.PersonasUrl + 'persona/' + id, persona, httpOptions);
  }
  deletePersona(id: number): Observable<Persona> {
      return this.http.delete<Persona>(this.PersonasUrl + 'persona/' + id, httpOptions);
  }
}
