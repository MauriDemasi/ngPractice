import { ApiService } from './../services/api.service';
import { Component, OnInit } from '@angular/core';

// type Productos = {

//   nombre: string;
//   costo: number;
// }

@Component({
  selector: 'app-componente-tabla',
  templateUrl: './componente-tabla.component.html',
  styleUrls: ['./componente-tabla.component.css']
})
export class ComponenteTablaComponent implements OnInit  {
  // productos: Productos[] = [
  //   {
  //     nombre: 'Leche',
  //     costo: 2.5

  //   },
  //   {
  //     nombre: 'Arroz',
  //     costo: 4.5
  //   },
  //   {
  //     nombre: 'Aceite',
  //     costo: 3.5
  //   },
  //   {
  //     nombre: 'Azucar',
  //     costo: 1.5
  //   }

  // ]

  users: any[] = [];
  isDisplay: boolean = false;
  displayedColumns: string[] = ['nombre', 'apellido', 'email'];
  loading: boolean = true;
  error:boolean=false;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getUsers().subscribe({
      next: (data) => {
        this.users = data['data'];
        this.loading = false;
        this.error=false;

      },
      error: (error) => {
        console.error(error);
        this.error=true;
        this.loading = false;
      }
    })
  }

  displayTable () {
    this.isDisplay = !this.isDisplay;
  }

}
