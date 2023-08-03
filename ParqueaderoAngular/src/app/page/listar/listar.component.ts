import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Persona } from 'src/app/domain/Persona';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent {

  
  listadoPersonasWS: any;

  constructor(
    private personasService: PersonaService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.listadoPersonasWS = this.personasService.getAll();
  }

  editar(persona: Persona) {
    console.log(Persona);
    let params: NavigationExtras = {
      queryParams: {
        persona: persona,
        nombre: 'mlorocho'
      }
    };
    this.router.navigate(['persona'], params);
  }

  eliminar(cedulaPer: string) {
    if (!isNaN(Number(cedulaPer)) && cedulaPer.length === 10) {
    this.personasService.delete1(cedulaPer).subscribe(() => {
      console.log("Persona eliminada con éxito.");
      this.ngOnInit()
    });
    console.log(cedulaPer);
    this.reloadPage();
    }else {
      alert("Nro. Cedula Incorrecta")
    }
  }

  eliminar222(cedula:string){
    //this.contactoService.delete(contacto.cedulaPer)
    if (!isNaN(Number(cedula)) && cedula.length === 10) {
    this.personasService.delete1(cedula).subscribe(data =>{
     console.log("resultado WS eliminar", cedula, data)
    
   });
   this.reloadPage(); 
  }else {
    alert("Nro. Cedula Incorrecta")
  }
   }

  nuevo() {
    this.router.navigate(['persona']);
  }

  reloadPage() {
    window.location.reload();
  }
}