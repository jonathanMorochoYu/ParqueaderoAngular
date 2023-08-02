import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/domain/Persona';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.scss']
})
export class PersonaComponent {


  persona: Persona = new Persona();

  constructor(
    private personasService: PersonaService,
    private router: Router
  ) {
    let params = this.router.getCurrentNavigation()?.extras.queryParams;
    if (params) {
      console.log(params);
      this.persona = new Persona();
      this.persona = params['persona'];
    }
  }

  enviar() {
    console.log(this.persona);
    if (!isNaN(Number(this.persona.cedulaPer)) && this.persona.cedulaPer.length === 10) {

    this.personasService.save(this.persona).subscribe(data => {
      console.log("Resultado WS save", data);
      this.reloadPage();
    });
  }else{
    alert("Nro. Cedula Incorrecta")
  }
  }

  actualizar() {
    console.log(this.persona);
    if (!isNaN(Number(this.persona.cedulaPer)) && this.persona.cedulaPer.length === 10) {
    this.personasService.save(this.persona).subscribe(data => {
      console.log("Resultado WS update", data);
      this.router.navigate(["listar"])
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























