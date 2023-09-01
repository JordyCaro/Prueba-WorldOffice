import { Component, Input } from '@angular/core'

@Component({
  selector: 'gallery-card1',
  templateUrl: 'gallery-card1.component.html',
  styleUrls: ['gallery-card1.component.css'],
})
export class GalleryCard1 {
  @Input()
  estadio: string =
    'Estadio: Estadio 18'
  @Input()
  web: string =
    'SitioWeb: null.com'
  @Input()
  nacionalidad: string =
    'Nacionalidad: Nacionalidad X'
  @Input()
  fecha: string =
    'Fundacion: 2023-08-31'
  @Input()
  entrenador: string =
    'Entrenador: Entrenador X'
  @Input()
  capacidad: string =
    'Capacidad: 36000'
  @Input()
  valor: string =
    'Valor: 000'
  @Input()
  rootClassName: string = ''
  @Input()
  image_alt: string = 'image'
  @Input()
  name: string = 'Equipo x'
  @Input()
  image_src: string =
    'https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEyfHxmb3Jlc3R8ZW58MHx8fHwxNjI2MjUxMjg4&ixlib=rb-1.2.1&h=1200'
  constructor() {}
}
