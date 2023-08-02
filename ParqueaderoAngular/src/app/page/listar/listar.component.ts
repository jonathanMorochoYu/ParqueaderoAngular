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
        nombre: 'Joseph'
      }
    };
    this.router.navigate(['listar'], params);
  }

  eliminar(cedula: string) {
    if (!isNaN(Number(cedula)) && cedula.length === 10) {
    this.personasService.delete1(cedula).subscribe(() => {
      console.log("Persona eliminada con éxito.");
      this.ngOnInit()
    });
    console.log(cedula);
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