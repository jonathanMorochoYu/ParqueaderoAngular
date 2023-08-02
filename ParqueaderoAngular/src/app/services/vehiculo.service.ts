import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Vehiculo } from '../domain/Vehiculo';

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {
 
  constructor(private http: HttpClient ) { }


  save(vehiculo : Vehiculo){
    return this.http.post<any>("http://localhost:8080/ParqueaderoPractica/rs/cliente", vehiculo)
  }

  getAll(){
    return this.http.get<any>("http://localhost:8080/ParqueaderoPractica/rs/cliente/lista")
  }



  delete1(codigoVeh : string){
    return this.http.delete<any>("http://localhost:8080/ParqueaderoPractica/rs/cliente/eliminar?cedula="+codigoVeh)
  }


}