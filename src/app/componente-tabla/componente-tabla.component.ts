import { Component } from '@angular/core';

type Productos = {

  nombre: string;
  costo: number;
}

@Component({
  selector: 'app-componente-tabla',
  templateUrl: './componente-tabla.component.html',
  styleUrls: ['./componente-tabla.component.css']
})
export class ComponenteTablaComponent {
  productos: Productos[] = [
    {
      nombre: 'Leche',
      costo: 2.5

    },
    {
      nombre: 'Arroz',
      costo: 4.5
    },
    {
      nombre: 'Aceite',
      costo: 3.5
    },
    {
      nombre: 'Azucar',
      costo: 1.5
    }

  ]

  displayedColumns: string[] = ['nombre', 'costo'];
  isDisplay: boolean = false;

  displayTable () {
    this.isDisplay = !this.isDisplay;
  }

}
