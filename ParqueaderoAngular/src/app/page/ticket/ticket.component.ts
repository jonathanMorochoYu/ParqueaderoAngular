import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Ticket } from 'src/app/domain/ticket';
import { TicketService } from 'src/app/services/ticket.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent {


  ticket: Ticket = new Ticket();

  constructor(
    private ticketService: TicketService,
    private router: Router
  ) {
    let params = this.router.getCurrentNavigation()?.extras.queryParams;
    if (params) {
      this.ticket = new Ticket();
      this.ticket = params['ticket'];
    }

  }

  enviar() {
    console.log(this.ticket);
    if (!isNaN(Number(this.ticket.vehiculo.placaVeh)) && this.ticket.vehiculo.placaVeh.length === 10) {

      this.ticketService.save(this.ticket).subscribe(data => {
        console.log("Resultado WS save", data);
        this.reloadPage();
      });
    } else {
      alert("Nro. Cedula Incorrecta")

    }
  }


  actualizar() {
    console.log(this.ticket);
    if (!isNaN(Number(this.ticket.vehiculo.placaVeh)) && this.ticket.vehiculo.placaVeh.length === 1) {
      this.ticketService.save(this.ticket).subscribe(data => {
        console.log("Resultado WS update", data);
        this.router.navigate(["listarveh"]);
        this.reloadPage();
      });
    } else {
      alert("Nro. Cedula Incorrecta");
    }
  }


  reloadPage() {
    window.location.reload();
  }
}