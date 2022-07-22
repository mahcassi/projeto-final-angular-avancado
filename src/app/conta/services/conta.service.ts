import { Usuario } from './../models/usuario';
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class ContaService {
  constructor(private http: HttpClient) {}

  registrarUsuario(usuario: Usuario) {
    
  }

  login(usuario: Usuario) {
    
  }
}
