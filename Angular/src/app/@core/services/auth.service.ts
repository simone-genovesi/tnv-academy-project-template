import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable, of, tap } from "rxjs";
import { LoginDTO, RegisterDTO, User } from "src/app/models/user";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  springBootUrl = 'http://localhost:8080/users';

  constructor(private router: Router, private http: HttpClient) {}



  login(loginData: LoginDTO): Observable<User> {
    return this.http.post<User>(`${this.springBootUrl}/login`, loginData).pipe(
      tap((user: User) => {
        localStorage.setItem("user", JSON.stringify(user));
        this.router.navigateByUrl("/welcome");
      })
    )
  }

  register(registerData: RegisterDTO): Observable<User> {
    return this.http.post<User>(`${this.springBootUrl}/`, registerData);
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