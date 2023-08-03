import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceraComponent } from './page/cabecera/cabecera.component';
import { PersonaComponent } from './page/persona/persona.component';
import { VehiculoComponent } from './page/vehiculo/vehiculo.component';
import { FacturaComponent } from './page/factura/factura.component';
import { FormsModule } from '@angular/forms';


import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';


import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { MenuComponent } from './page/menu/menu.component';
import { PiePaginaComponent } from './page/pie-pagina/pie-pagina.component';
import { ListarComponent } from './page/listar/listar.component';
import { ListarVehComponent } from './page/listar-veh/listar-veh.component';
import { ListarTicketComponent } from './page/listar-ticket/listar-ticket.component';
import { TicketComponent } from './page/ticket/ticket.component';
import { ListarfacturaComponent } from './page/listarfactura/listarfactura.component';



@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    PersonaComponent,
    VehiculoComponent,
    FacturaComponent,
    TicketComponent,
    MenuComponent,
    PiePaginaComponent,
    ListarComponent,
    ListarVehComponent,
    ListarTicketComponent,
    ListarfacturaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatIconModule,
    MatSlideToggleModule,
    HttpClientModule,
    MatFormFieldModule,

   
    
    
  ],
 
    
  bootstrap: [AppComponent]
})
export class AppModule { }
