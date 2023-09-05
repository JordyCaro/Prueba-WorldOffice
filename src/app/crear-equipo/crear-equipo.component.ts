import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Equipo } from '../types/types';
import { ServicesService } from '../services/services.service';

@Component({
  selector: 'app-crear-equipo',
  templateUrl: './crear-equipo.component.html',
  styleUrls: ['./crear-equipo.component.css']
})
export class CrearEquipoComponent implements OnInit {

  createEquipoForm = new FormGroup({
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

  submitForm() {
    const formData: Equipo = {
      nombre: this.createEquipoForm.value.nombre,
      estadio: this.createEquipoForm.value.estadio,
      sitioWeb: this.createEquipoForm.value.sitioWeb,
      nacionalidad: this.createEquipoForm.value.nacionalidad,
      fundacion: this.createEquipoForm.value.fundacion,
      entrenador: this.createEquipoForm.value.entrenador,
      capacidad: this.createEquipoForm.value.capacidad,
      valor: this.createEquipoForm.value.valor,
    };
    console.log(formData);

    this.servicesService.postEquipos(formData).subscribe((data) => {
      console.log(data);
      this.createEquipoForm.reset();
      // this.getEquipos();
    });
  }

}
