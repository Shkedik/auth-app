import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {

  baseUrl: string = "http://localhost:64457/"
  
  constructor(private httpClient: HttpClient,
    private router: Router) { }

  registerUser(email: string, password: string, confirmPassword: string): Observable<any> {

    var body = {
      email: email,
      password: password,
      confirmPassword: confirmPassword
    };
    
    return this.httpClient.post(`${this.baseUrl}api/auth/register`, body);
  }

  loginUser(email: string, password: string): Observable<any> {

    var body = {
      email: email,
      password: password
    };
    
    return this.httpClient.post(`${this.baseUrl}api/auth/login`, body);
  }

  loggedIn() {
    return !!localStorage.getItem('encodedJwt');
  }

  getToken() {
    const expired = localStorage.getItem('expiredDate');
    
    var date = new Date(expired);
    
    if (date <= new Date()) {
      this.deleteToken();
      this.router.navigate(['/auth/login']);
    } 
    return localStorage.getItem('encodedJwt'); 
  }

  deleteToken() { 
    localStorage.removeItem('encodedJwt');
    localStorage.removeItem('expiredDate');
  }

  logOut() {
    this.deleteToken();
    this.router.navigate(['/auth/login'])
  }
}
