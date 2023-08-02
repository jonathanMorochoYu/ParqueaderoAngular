import { Component } from '@angular/core';
import { NavigationEnd } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  public mostrarMenu: boolean = true; // Esta variable controlará si se muestra el menú o no

  constructor(
    private router:Router
  ){}
  public navegarAPagina(){
    this.router.navigate(['persona']);
  }
}
