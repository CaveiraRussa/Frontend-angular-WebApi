import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})

export class UsuarioService {

  private API_URL = `${environment.apiUrl}/Usuario`;

  constructor(private http: HttpClient) {}

  getAllUsuario(): Observable<Usuario[]>  {
    const apiURL = this.API_URL;
    return this.http.get<Usuario[]>(apiURL);
  }

  getUsuarioById(id:string): Observable<Usuario>  {
    const apiURL = `${this.API_URL}/${id}`;
    return this.http.get<Usuario>(apiURL);
  }

  postUsuario(usuario: Usuario){
    const apiURL = this.API_URL;
    return this.http.post<Usuario>(apiURL, usuario);
  }

  putUsuario(usuario: Usuario, id: string){
    const apiURL = `${this.API_URL}/${id}`;
    return this.http.put<Usuario>(apiURL, usuario);
  }

  deleteUsuario(usuario: Usuario){
    const apiURL = `${this.API_URL}/${usuario.id}`;
    return this.http.delete<Usuario>(apiURL);
  }
}
