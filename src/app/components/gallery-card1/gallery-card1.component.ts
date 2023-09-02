import { Component, Input, OnInit } from '@angular/core'
import { Equipo } from 'src/app/types/types'

@Component({
  selector: 'gallery-card1',
  templateUrl: 'gallery-card1.component.html',
  styleUrls: ['gallery-card1.component.css'],
})
export class GalleryCard1 implements OnInit {
  @Input() equipo: Equipo
  constructor() {}

  ngOnInit() {
    // console.log(this.equipo)
  }

}
