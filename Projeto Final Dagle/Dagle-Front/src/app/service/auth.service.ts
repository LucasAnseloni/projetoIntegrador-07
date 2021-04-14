import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { User } from '../model/User';
import { UserLogin } from '../model/UserLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private router: Router

  ) { }

  entrar(userLogin: UserLogin): Observable<UserLogin> {
    return this.http.post<UserLogin>('http://localhost:8080/usuarios/logar',userLogin)

  }

  cadastrar(user: User): Observable<User>{
    return this.http.post<User>('http://localhost:8080/usuarios/cadastrar',user)

  }

  getByIdUser(id: number): Observable<User>{
    return this.http.get<User>(`http://localhost:8080/usuarios/${id}`)
  }


  menuLogado(){
    let ok = false

      if(environment.email != ''){
        ok = true
      }

      return ok
  }

  menuDeslogado(){
    let ok = false

      if(environment.email == ''){
        ok = true
      }

      return ok
  }

  adm(){
    let ok = false

    if(environment.tipo == 'adm'){
      ok = true
    }

    return ok
  }
}
