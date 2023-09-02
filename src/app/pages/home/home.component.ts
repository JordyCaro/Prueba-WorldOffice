import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { ServicesService } from 'src/app/services/services.service';
import { Equipo, EquiposLista } from 'src/app/types/types';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
})
export class Home implements OnInit {
  equiposLista: EquiposLista;
  currentPage: number;
  totalResources: number;

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

  editEquipoForm = new FormGroup({
    id: new FormControl(0, [Validators.required]),
    nombre: new FormControl('', [Validators.required]),
    estadio: new FormControl('', [Validators.required]),
    sitioWeb: new FormControl('', [Validators.required]),
    nacionalidad: new FormControl('', [Validators.required]),
    fundacion: new FormControl('', [Validators.required]),
    entrenador: new FormControl('', [Validators.required]),
    capacidad: new FormControl(0, [Validators.required]),
    valor: new FormControl(0, [Validators.required]),
  });

  constructor(
    private title: Title,
    private meta: Meta,
    private servicesService: ServicesService,
    private formBuilder: FormBuilder,
  ) {
    this.title.setTitle('FIFA');
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'FIFA',
      },
    ]);
  }

  ngOnInit() {
    this.getEquipos();
  }

  
  getEquipos(page: number = 0) {
    this.servicesService.getEquipos(page).subscribe(
      (data) => {
        // console.log(data);
        this.equiposLista = data;
      },
      (error) => {
      }
    );
  }
  getEquipoById() {
    this.servicesService.getEquipoById(this.editEquipoForm.value.id).subscribe(
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
  
  onPageChange(newPage: number) {
    this.currentPage = newPage;
    this.getEquipos(newPage);
  }

  pageNumbers(): number[] {
    const pages = [];
    for (let i = this.equiposLista.number; i < this.equiposLista.number + 5; i++) {
      pages.push(i);
    }
    return pages;
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
      this.getEquipos();
    });
  }

  clearForm() {
    this.createEquipoForm.reset();
    this.editEquipoForm.reset();
  }

  editEquipo() {
    const formData : Equipo =  {
      id: this.editEquipoForm.value.id,
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
        this.getEquipos();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  deleteEquipos() {
    this.servicesService.deleteEquipos(this.editEquipoForm.value.id).subscribe(
      (data) => {
        this.getEquipos(); 
      },
      (error) => {
      }
    );
  }
  

}
