import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Equipo } from '../types/types';
import { ServicesService } from '../services/services.service';

@Component({
  selector: 'app-editar-equipo',
  templateUrl: './editar-equipo.component.html',
  styleUrls: ['./editar-equipo.component.css']
})
export class EditarEquipoComponent implements OnInit {
  editEquipoForm = new FormGroup({
    id: new FormControl('', [Validators.required]),
    nombre: new FormControl('', [Validators.required]),
    estadio: new FormControl('', [Validators.required]),
    sitioWeb: new FormControl('', [Validators.required]),
    nacionalidad: new FormControl('', [Validators.required]),
    fundacion: new FormControl('', [Validators.required]),
    entrenador: new FormControl('', [Validators.required]),
    capacidad: new FormControl(0, [Validators.required]),
    valor: new FormControl(0, [Validators.required]),
  });

  constructor(private servicesService: ServicesService) { }

  ngOnInit(): void {
  }

  getEquipoById() {
    this.servicesService.getEquipoById(Number(this.editEquipoForm.value.id)).subscribe(
      (data) => {
        // console.log(data);
        const equipo = data;
        console.log(equipo);
        this.editEquipoForm.patchValue({
          nombre: equipo.nombre,
          estadio: equipo.estadio,
          sitioWeb: equipo.sitioWeb,
          nacionalidad: equipo.nacionalidad,
          fundacion: equipo.fundacion,
          entrenador: equipo.entrenador,
          capacidad: equipo.capacidad,
          valor: equipo.valor,
        });
        console.log(equipo);

      },
      (error) => {
      }
    );
  }

  editEquipo() {
    const formData : Equipo =  {
      id: Number(this.editEquipoForm.value.id),
      nombre: this.editEquipoForm.value.nombre,
      estadio: this.editEquipoForm.value.estadio,
      sitioWeb: this.editEquipoForm.value.sitioWeb,
      nacionalidad: this.editEquipoForm.value.nacionalidad,
      fundacion: this.editEquipoForm.value.fundacion,
      entrenador: this.editEquipoForm.value.entrenador,
      capacidad: this.editEquipoForm.value.capacidad,
      valor: this.editEquipoForm.value.valor,
    };
    this.servicesService.putEquipos(formData).subscribe(
      (data) => {
        console.log(data);
        // this.getEquipos();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  clearForm() {
    this.editEquipoForm.reset();
  }

}
