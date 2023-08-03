import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Factura } from 'src/app/domain/Factura';
import { FacturaService } from 'src/app/services/factura.service';

@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.scss']
})
export class FacturaComponent {

  factura: Factura = new Factura();

  constructor(
    private facturaService: FacturaService,
    private router: Router
  ) {
    let params = this.router.getCurrentNavigation()?.extras.queryParams;
    if (params) {
      console.log(params);
      this.factura = new Factura();
      this.factura = params['factura'];
    }
  }

  enviar() {
    console.log(this.factura);
    if (!isNaN(Number(this.factura.codigoFac))) {

    this.facturaService.save(this.factura).subscribe(data => {
      console.log("Resultado WS save", data);
      this.reloadPage();
    });
  }else{
    alert("Nro. Cedula Incorrecta")
  }
  }

  actualizar() {
    console.log(this.factura);
    if (!isNaN(Number(this.factura.codigoFac))) {
    this.facturaService.save(this.factura).subscribe(data => {
      console.log("Resultado WS update", data);
      this.router.navigate(["listarFactura"])
      //this.reloadPage();
    });
  }else{
    alert("Nro. Cedula Incorrecta")
  }
  }

  reloadPage() {
    window.location.reload();
  }
}























