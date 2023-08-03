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

  constructor(
    private vehiculoService: VehiculoService,
    private router: Router
  ) {
    let params = this.router.getCurrentNavigation()?.extras.queryParams;
    if (params) {
      console.log(params);
      this.vehiculo = new Vehiculo();
      this.vehiculo = params['vehiculo'];
    }
  }



  
  enviar() {
    console.log(this.vehiculo);
    if (!isNaN(Number(this.vehiculo.propietario.cedulaPer)) && this.vehiculo.propietario.cedulaPer.length === 10) {

    this.vehiculoService.save(this.vehiculo).subscribe(data => {
      console.log("Resultado WS save", data);
      this.reloadPage();
    });
  }else{
    alert("Nro. Cedula Incorrecta")
  }
  }



  actualizar() {
    console.log(this.vehiculo);
    if (!isNaN(Number(this.vehiculo.propietario.cedulaPer)) && this.vehiculo.propietario.cedulaPer.length === 10) {
      this.vehiculoService.save(this.vehiculo).subscribe(data => {
        console.log("Resultado WS update", data);
        this.router.navigate(["listarveh"]);
        //this.reloadPage();
      });
    } else {
      alert("Nro. Cedula Incorrecta");
    }
  }

  actualizar1() {
    console.log(this.vehiculo);
    if (!isNaN(Number(this.vehiculo.placaVeh)) && this.vehiculo.placaVeh.length === 7) {
    this.vehiculoService.save(this.vehiculo).subscribe(data => {
      console.log("Resultado WS update", data);
      this.router.navigate(["listarveh"])
      //this.reloadPage();
    });
  }else{
    alert("Placa Incorrecta")
  }
  }

  reloadPage() {
    window.location.reload();
  }
}













