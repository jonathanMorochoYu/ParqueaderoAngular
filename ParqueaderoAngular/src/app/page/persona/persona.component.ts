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

  constructor(private personaService: PersonaService,
    private router: Router) {

      let params = this.router.getCurrentNavigation()?.extras.queryParams;
      if(params){
        console.log(params)
        this.persona = new Persona()
        this.persona = params['persona']
      }
    }





    guardar() {
      console.log(this.persona)
      //this.contactoService.save(this.contacto)
      //this.contacto = new Contacto()
      if (!isNaN(Number(this.persona.cedulaPer)) && this.persona.cedulaPer.length === 10) {

      this.personaService.save(this.persona).subscribe(data =>{
        console.log("resultado WS save", data)
      });

      this.persona = new Persona()
      }else {
        alert("Nro. Cedula Incorrecta")
      }
    }
    Edita2() {
      console.log(this.persona)
      this.personaService.save(this.persona)
      this.persona = new Persona()
      this.personaService.save(this.persona).subscribe(data =>{
        console .log("resultado WS save", data)
      });
      this.persona = new Persona()
    } 
  
    
}