import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FacturaComponent } from './page/factura/factura.component';
import { ListarTicketComponent } from './page/listar-ticket/listar-ticket.component';
import { ListarVehComponent } from './page/listar-veh/listar-veh.component';
import { ListarComponent } from './page/listar/listar.component';
import { ListarfacturaComponent } from './page/listarfactura/listarfactura.component';
import { PersonaComponent } from './page/persona/persona.component';
import { TicketComponent } from './page/ticket/ticket.component';
import { VehiculoComponent } from './page/vehiculo/vehiculo.component';

const routes: Routes = [

  {path:'persona',component:PersonaComponent},
  {path:'vehiculo',component:VehiculoComponent},
  {path:'ticket',component:TicketComponent},
  {path:'factura',component:FacturaComponent},
  {path:'listar',component:ListarComponent},
  {path:'listarveh',component:ListarVehComponent},
  {path:'listarticket',component:ListarTicketComponent},
  {path:'listarFactura',component:ListarfacturaComponent},
 


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
