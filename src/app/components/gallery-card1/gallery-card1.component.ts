import { Component, Input } from '@angular/core'

@Component({
  selector: 'gallery-card1',
  templateUrl: 'gallery-card1.component.html',
  styleUrls: ['gallery-card1.component.css'],
})
export class GalleryCard1 {
  @Input()
  subtitle: string =
    'Estadio: Estadio 18, SitioWeb: null.com, Nacionalidad: Nacionalidad X, Fundacion: 2023-08-31, Entrenador: Entrenador X, Capacidad: 36000, Valor: 000'
  @Input()
  rootClassName: string = ''
  @Input()
  image_alt: string = 'image'
  @Input()
  title: string = 'Equipo x'
  @Input()
  image_src: string =
    'https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEyfHxmb3Jlc3R8ZW58MHx8fHwxNjI2MjUxMjg4&ixlib=rb-1.2.1&h=1200'
  constructor() {}
}
