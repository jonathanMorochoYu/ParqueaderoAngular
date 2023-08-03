import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Vehiculo } from 'src/app/domain/Vehiculo';
import { VehiculoService } from 'src/app/services/vehiculo.service';

@Component({
  selector: 'app-listar-veh',
  templateUrl: './listar-veh.component.html',
  styleUrls: ['./listar-veh.component.scss']
})
export class ListarVehComponent {

  
  listadoVehiWS: any;

  constructor(
    private vehiculoService: VehiculoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.listadoVehiWS = this.vehiculoService.getAll();
  }

  editar(vehiculo: Vehiculo) {
    console.log(Vehiculo);
    let params: NavigationExtras = {
      queryParams: {
        vehiculo: vehiculo,
        nombre: 'morocho'
      }
    };
    this.router.navigate(['vehiculo'], params);
  }

  eliminar(placaVeh: string) {
    
    if (!isNaN(Number(placaVeh)) && placaVeh.length === 7) {
    this.vehiculoService.delete1(placaVeh).subscribe(() => {
      console.log("Persona eliminada con éxito.");
      this.ngOnInit()
    });
    console.log(placaVeh);
    this.reloadPage();
    }else {
      alert("Nro. Placa Incorrecta")
    }
  }

  eliminar2(placaVeh: string) {
    this.vehiculoService.delete1(placaVeh).subscribe(() => {
      console.log("Vehículo eliminado con éxito.");
      this.ngOnInit();
      
    });
    this.reloadPage();

  }

  nuevo() {
    this.router.navigate(['vehiculo']);
  }

  reloadPage() {
    window.location.reload();
  }
}

