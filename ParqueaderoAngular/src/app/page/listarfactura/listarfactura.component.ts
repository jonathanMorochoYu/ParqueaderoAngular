import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Factura } from 'src/app/domain/Factura';
import { FacturaService } from 'src/app/services/factura.service';

@Component({
  selector: 'app-listarfactura',
  templateUrl: './listarfactura.component.html',
  styleUrls: ['./listarfactura.component.scss']
})
export class ListarfacturaComponent {

  listadoFactiWS: any;

  constructor(
    private facturaService: FacturaService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.listadoFactiWS = this.facturaService.getAll();
  }

  editar(factura: Factura) {
    console.log(Factura);
    let params: NavigationExtras = {
      queryParams: {
        factura: factura,
        nombre: 'morocho'
      }
    };
    this.router.navigate(['factura'], params);
  }

  eliminar(codigoFac: string) {
    
    if (!isNaN(Number(codigoFac)) && codigoFac.length === 7) {
    this.facturaService.delete1(codigoFac).subscribe(() => {
      console.log("Persona eliminada con éxito.");
      this.ngOnInit()
    });
    console.log(codigoFac);
    this.reloadPage();
    }else {
      alert("Nro. Placa Incorrecta")
    }
  }

  eliminar2(codigoFac: string) {
    this.facturaService.delete1(codigoFac).subscribe(() => {
      console.log("factura eliminado con éxito.");
      this.ngOnInit();
      
    });
    this.reloadPage();

  }

  nuevo() {
    this.router.navigate(['factura']);
  }

  reloadPage() {
    window.location.reload();
  }
}

