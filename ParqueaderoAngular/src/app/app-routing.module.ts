import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonaComponent } from './page/persona/persona.component';
import { VehiculoComponent } from './page/vehiculo/vehiculo.component';

const routes: Routes = [

  {path:'persona',component:PersonaComponent},
  {path:'vehiculo',component:VehiculoComponent},
 


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
