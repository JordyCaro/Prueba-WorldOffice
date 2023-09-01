import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'
import { ServicesService } from 'src/app/services/services.service'


@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
})
export class Home {
  constructor(private title: Title, private meta: Meta,) {
    this.title.setTitle('FIFA')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'FIFA',
      },
    ])
  }
}
