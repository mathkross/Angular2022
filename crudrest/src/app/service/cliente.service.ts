import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cliente } from '../model/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) { }  //injetar algo

  listar(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(`${environment.apiEndPoint}/cliente`);
  } 

  inserir(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(`${environment.apiEndPoint}/cliente`, cliente);
  }

  remover(id: number): Observable<any> {
    return this.http.delete(`${environment.apiEndPoint}/cliente/${id}`);

  }

  atualizar(cliente: Cliente): Observable<Cliente> {
    return this.http.put<Cliente>(`${environment.apiEndPoint}/cliente/${cliente.id}`, cliente);
  }
}
