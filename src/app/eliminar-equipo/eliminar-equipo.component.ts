import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services/services.service';
import { Equipo } from '../types/types';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-eliminar-equipo',
  templateUrl: './eliminar-equipo.component.html',
  styleUrls: ['./eliminar-equipo.component.css']
})
export class EliminarEquipoComponent implements OnInit {

  equipo: Equipo;

  deleteEquipoForm = new FormGroup({
    id: new FormControl('', [Validators.required]),
  });
  constructor(private servicesService: ServicesService) { }

  ngOnInit(): void {
  }

  getEquipoById() {
      this.servicesService.getEquipoById(Number(this.deleteEquipoForm.value.id)).subscribe(
        (data) => {
          this.equipo = data;
          console.log(this.equipo);
        },
        (error) => {
        }
      );
    }

    deleteEquipos() {
      this.servicesService.deleteEquipos(Number(this.deleteEquipoForm.value.id)).subscribe(
        (data) => {
          // this.getEquipos(); 
        },
        (error) => {
        }
      );
    }
}
