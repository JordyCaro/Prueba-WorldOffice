import { Component, OnInit } from '@angular/core';
import { EquiposLista } from '../types/types';
import { ServicesService } from '../services/services.service';

@Component({
  selector: 'app-lista-equipo',
  templateUrl: './lista-equipo.component.html',
  styleUrls: ['./lista-equipo.component.css']
})
export class ListaEquipoComponent implements OnInit {
  equiposLista: EquiposLista;
  currentPage: number = 1;
  totalResources: number;

  constructor(private servicesService: ServicesService) { }

  ngOnInit(): void {
    this.getEquipos();
  }

  onPageChange(newPage: number) {
    this.currentPage = newPage;
    this.getEquipos(newPage);
  }

  getEquipos(page: number = 1) {
    this.servicesService.getEquipos(page-1).subscribe(
      (data) => {
        // console.log(data);
        this.equiposLista = data;
      },
      (error) => {
      }
    );
  }

  pageNumbers(): number[] {
    const pages = [];
    for (let i = this.equiposLista.number + 1; i < this.equiposLista.number + 5; i++) {
      pages.push(i);
    }
    return pages;
  }

}
