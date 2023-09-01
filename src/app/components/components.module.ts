import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { Footer } from './footer/footer.component'
import { PostReaction } from './post-reaction/post-reaction.component'
import { SecondaryButton } from './secondary-button/secondary-button.component'
import { PrimaryButton } from './primary-button/primary-button.component'
import { GalleryCard1 } from './gallery-card1/gallery-card1.component'

@NgModule({
  declarations: [
    Footer,
    PostReaction,
    SecondaryButton,
    PrimaryButton,
    GalleryCard1,
  ],
  imports: [CommonModule, RouterModule],
  exports: [Footer, PostReaction, SecondaryButton, PrimaryButton, GalleryCard1],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ComponentsModule {}
