import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Factura } from 'src/app/domain/Factura';
import { Ticket } from 'src/app/domain/ticket';
import { FacturaService } from 'src/app/services/factura.service';
import { TicketService } from 'src/app/services/ticket.service';

@Component({
  selector: 'app-listar-ticket',
  templateUrl: './listar-ticket.component.html',
  styleUrls: ['./listar-ticket.component.scss']
})
export class ListarTicketComponent {
  listadoTicketWS: any;

  constructor(
    private ticketService: TicketService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.listadoTicketWS = this.ticketService.getAll();
  }

  editar(ticket: Ticket) {
    console.log(Ticket);
    let params: NavigationExtras = {
      queryParams: {
        ticket: Ticket,
        nombre: 'mlorocho'
      }
    };
    this.router.navigate(['ticket'], params);
  }

  eliminar(codigoTic: string) {
    if (!isNaN(Number(codigoTic)) && codigoTic.length === 10) {
    this.ticketService.delete1(codigoTic).subscribe(() => {
      console.log("ticket eliminada con éxito.");
      this.ngOnInit()
    });
    console.log(codigoTic);
    this.reloadPage();
    }else {
      alert("Nro. Cedula Incorrecta")
    }
  }


  eliminar2(codigoTic: string) {
    this.ticketService.delete1(codigoTic).subscribe(() => {
      console.log("ticket eliminado con éxito.");
      this.ngOnInit();
      
    });
    this.reloadPage();

  }


  nuevo() {
    this.router.navigate(['ticket']);
  }

  reloadPage() {
    window.location.reload();
  }
}