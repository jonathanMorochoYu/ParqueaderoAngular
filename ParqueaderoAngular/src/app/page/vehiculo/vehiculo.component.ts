import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Vehiculo } from 'src/app/domain/Vehiculo';
import { VehiculoService } from 'src/app/services/vehiculo.service';

@Component({
  selector: 'app-vehiculo',
  templateUrl: './vehiculo.component.html',
  styleUrls: ['./vehiculo.component.scss']
})
export class VehiculoComponent {
  vehiculo: Vehiculo = new Vehiculo();

  constructor(private vehiculoService: VehiculoService,
    private router: Router) {

      let params = this.router.getCurrentNavigation()?.extras.queryParams;
      if(params){
        console.log(params)
        this.vehiculo = new Vehiculo()
        this.vehiculo = params['vehiculo']
      }
    }





    guardar() {
      console.log(this.vehiculo)
      //this.contactoService.save(this.contacto)
      //this.contacto = new Contacto()
      if (!isNaN(Number(this.vehiculo.codigoVeh)) && this.vehiculo.codigoVeh.length === 10) {

      this.vehiculoService.save(this.vehiculo).subscribe(data =>{
        console.log("resultado WS save", data)
      });

      this.vehiculo = new Vehiculo()
      }else {
        alert("Nro. Cedula Incorrecta")
      }
    }
    Edita2() {
      console.log(this.vehiculo)
      this.vehiculoService.save(this.vehiculo)
      this.vehiculo = new Vehiculo()
      this.vehiculoService.save(this.vehiculo).subscribe(data =>{
        console .log("resultado WS save", data)
      });
      this.vehiculo = new Vehiculo()
    } 
  
    
}