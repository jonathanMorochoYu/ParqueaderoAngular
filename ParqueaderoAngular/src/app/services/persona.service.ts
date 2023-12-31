import { Injectable } from '@angular/core';
import { Persona } from '../domain/Persona';
import { ReturnStatement } from '@angular/compiler';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  
  constructor(private http: HttpClient ) { }


  save(persona : Persona){
    return this.http.post<any>("http://localhost:8080/parqueadero/rs/cliente", persona)
  }

  getAll(){
    return this.http.get<any>("http://localhost:8080/parqueadero/rs/cliente/lista1")
  }



  delete1(cedulaPer: string){
    return this.http.delete<any>("http://localhost:8080/parqueadero/rs/cliente/id/"+cedulaPer)
  }


}