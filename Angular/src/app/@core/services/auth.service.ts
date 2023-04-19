import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable, of, tap } from "rxjs";
import { LoginDTO, RegisterDTO, User } from "src/app/models/user";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  springBootUrl = 'http://localhost:8080';

  constructor(private router: Router, private http: HttpClient) {}



  login(loginData: LoginDTO): Observable<User> {
    return this.http.post<User>(`${this.springBootUrl}/users/login`, loginData).pipe(
      tap((user: User) => {
        localStorage.setItem("user", JSON.stringify(user));
        this.router.navigateByUrl("/rankings");
      })
    )
  }

  register(registerData: RegisterDTO) {
    // TODO Chiamare il servizio per la registrazione e redirigere l'utente alla root per il login
    this.router.navigateByUrl("/");
  }

  logout() {
    localStorage.removeItem("user");
  }

  isAuthenticated() {
    return !!localStorage.getItem("user");
  }

  getCurrentUser() {
    const user = JSON.parse(localStorage.getItem("user") || '') as User;
    return user;
  }
}

  // login(loginData: LoginDTO) {
  //   console.log('auth service.ts', loginData);

  //   // Passare username e password
  //   // return this.http.get(`${this.springBootUrl}/api/user`);

  //   // Stub prima di implementare l'API
  //   const user: User = {
  //     name: 'Paolino',
  //     surname: 'Paperino',
  //     username: 'papero123'
  //   }
  //   return of(user);
  //   // Fine stub
  // }

  // register(registerData: RegisterDTO) {
  //   // TODO Chiamare il servizio per la registrazione e redirigere l'utente alla root per il login
  //   this.router.navigateByUrl("/");
  // }

  // logout() {
  //   localStorage.removeItem("user");
  // }

  // isAuthenticated() {
  //   return !!localStorage.getItem("user");
  // }

  // getCurrentUser() {
  //   const user = JSON.parse(localStorage.getItem("user") || '') as User;
  //   return user;
  // }