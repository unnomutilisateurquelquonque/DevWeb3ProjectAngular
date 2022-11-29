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
  addPersona(Persona: Persona): Observable<Persona> {
    return this.http.post<Persona>(this.PersonasUrl + 'personas/', Persona, httpOptions);
  }
  updatePersona(Persona: Persona,id: number): Observable<any> {
    return this.http.put<Persona>(this.PersonasUrl + 'persona/' + id, Persona, httpOptions);
  }
  deletePersona(id: number): Observable<Persona> {
      return this.http.delete<Persona>(this.PersonasUrl + 'persona/' + id, httpOptions);
  }
}
