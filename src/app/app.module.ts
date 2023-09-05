import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { BrowserModule } from '@angular/platform-browser'

import { ComponentsModule } from './components/components.module'
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component'
import { ServicesService } from './services/services.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListaEquipoComponent } from './lista-equipo/lista-equipo.component';
import { EditarEquipoComponent } from './editar-equipo/editar-equipo.component';
import { EliminarEquipoComponent } from './eliminar-equipo/eliminar-equipo.component';
import { CrearEquipoComponent } from './crear-equipo/crear-equipo.component';


// const routes = [
//   {
//     path: '',
//     loadChildren: () =>
//       import('./pages/home/home.module').then((m) => m.HomeModule),
//   },
// ]

const routes: Routes = [
  { path: 'lista-equipo', component: ListaEquipoComponent },
  { path: 'editar-equipo', component: EditarEquipoComponent },
  { path: 'crear-equipo', component: CrearEquipoComponent },
  { path: 'eliminar-equipo', component: EliminarEquipoComponent },
  // Add more routes if needed
  { path: '', redirectTo: '/lista-equipo', pathMatch: 'full' }, // Default route
];

@NgModule({
  declarations: [AppComponent, ListaEquipoComponent, EditarEquipoComponent, EliminarEquipoComponent, CrearEquipoComponent,  ],
  imports: [BrowserModule, RouterModule.forRoot(routes), ComponentsModule, HttpClientModule, FormsModule,
    ReactiveFormsModule,
  ],
  providers: [ServicesService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
