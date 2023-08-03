import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Factura } from '../domain/Factura';

@Injectable({
  providedIn: 'root'
})
export class FacturaService {

  constructor(private http: HttpClient ) { }


  save(factura : Factura){
    return this.http.post<any>("http://localhost:8080/parqueadero/rs/factura", factura)
  }

  getAll(){
    return this.http.get<any>("http://localhost:8080/parqueadero/rs/factura/lista1")
  }



  delete1(codigoFac : string){
    return this.http.delete<any>("http://localhost:8080/parqueadero/rs/factura/id/"+codigoFac)
  }


}