import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Equipo, EquiposLista } from '../types/types';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  uploadImage(file: any) {
    throw new Error('Method not implemented.');
  }
  public baseUrl = environment.API_URL;

  constructor(private httpClient: HttpClient,) { }

  public getEquipos(page: number = 0): Observable<EquiposLista> { 
    const endpointUrl = `${this.baseUrl}/listar/${page}/9`;
    return this.httpClient.get<EquiposLista>(endpointUrl);
  }

  public getEquipoById(id: number): Observable<Equipo> { 
    const endpointUrl = `${this.baseUrl}/consultar/${id}`;
    return this.httpClient.get<Equipo>(endpointUrl);
  }

  public postEquipos(equipo : Equipo): Observable<any> { 
    const endpointUrl = `${this.baseUrl}/crear`;
    return this.httpClient.post(endpointUrl,equipo);
  }

  public putEquipos(equipo : Equipo): Observable<any> { 
    const endpointUrl = `${this.baseUrl}/actualizar/${equipo.id} `;
    return this.httpClient.put(endpointUrl,equipo);
  }
  public deleteEquipos(id : number): Observable<any> { 
    const endpointUrl = `${this.baseUrl}/eliminar/${id} `;
    return this.httpClient.delete(endpointUrl);
  }

}
