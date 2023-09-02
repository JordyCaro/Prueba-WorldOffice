import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
})
export class Home implements OnInit {
  equipos: any;
  constructor(
    private title: Title,
    private meta: Meta,
    // private servicesService: ServicesService
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
    // this.getEquipos();
  }

  
  // getEquipos() {
  //   this.servicesService.getEquipos().subscribe(
  //     (data) => {
  //       console.log(data);
  //       this.equipos = data.banners.reverse();
  //     },
  //     (error) => {
  //     }
  //   );
  // }

}
