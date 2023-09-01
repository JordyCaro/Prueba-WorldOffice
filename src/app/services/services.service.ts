import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  uploadImage(file: any) {
    throw new Error('Method not implemented.');
  }
  public baseUrl = environment.API_URL;

  constructor(private httpClient: HttpClient,) { }

  public getEquipos(): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}equipos/listar/0/100`);
  }

}
