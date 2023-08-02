import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FacturaComponent } from './page/factura/factura.component';
import { ListarVehComponent } from './page/listar-veh/listar-veh.component';
import { ListarComponent } from './page/listar/listar.component';
import { PersonaComponent } from './page/persona/persona.component';
import { VehiculoComponent } from './page/vehiculo/vehiculo.component';

const routes: Routes = [

  {path:'persona',component:PersonaComponent},
  {path:'vehiculo',component:VehiculoComponent},
  {path:'factura',component:FacturaComponent},
  {path:'listar',component:ListarComponent},
  {path:'listarveh',component:ListarVehComponent},

 


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
