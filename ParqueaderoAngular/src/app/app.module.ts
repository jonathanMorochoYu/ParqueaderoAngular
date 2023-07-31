import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceraComponent } from './page/cabecera/cabecera.component';
import { PersonaComponent } from './page/persona/persona.component';
import { VehivuloComponent } from './page/vehivulo/vehivulo.component';
import { VehiculoComponent } from './page/vehiculo/vehiculo.component';
import { FacturaComponent } from './page/factura/factura.component';
import { TicketComponent } from './page/ticket/ticket.component';

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    PersonaComponent,
    VehivuloComponent,
    VehiculoComponent,
    FacturaComponent,
    TicketComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
