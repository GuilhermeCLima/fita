import { Injectable } from '@angular/core';
import { HttpClient, HttpClientJsonpModule } from '@angular/common/http';
import { UsuarioLogin } from './../model/UserLogin';
import { UsuarioModel } from '../model/User';
import { JsonPipe } from '@angular/common';
import { useAnimation } from '@angular/animations';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private http: HttpClient) { }


  logar(userLogin: UsuarioLogin) {
    return this.http.post("http://172.26.0.1:9000/usuarios/logar", userLogin)
  }

  cadastro(user: UsuarioModel) {
    return this.http.post("http://172.26.0.1gi:9000/usuarios/cadastrar", user)
  }

  btnSair() {
    let ok = false;
    let token = localStorage.getItem('token')
    if (token != null) {
      ok = true
    }
    return ok
  }
  btnLogin() {
    let ok = false
    let token = localStorage.getItem('token')
    if (token == null) {
      ok = true
    }
    return ok
  }
  
}
