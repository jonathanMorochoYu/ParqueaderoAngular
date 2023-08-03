import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ticket } from '../domain/ticket';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  constructor(private http: HttpClient ) { }


  save(ticket : Ticket){
    return this.http.post<any>("http://localhost:8080/parqueadero/rs/ticket", ticket)
  }

  getAll(){
    return this.http.get<any>("http://localhost:8080/parqueadero/rs/ticket/lista1")
  }



  delete1(codigoTic : string){
    return this.http.delete<any>("http://localhost:8080/parqueadero/rs/ticket/id/"+codigoTic)
  }


}