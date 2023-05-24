import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  baseUrl = "http://localhost:8080/api/user/v1/"
  constructor(private http:HttpClient) { }

  signUp(email:string,password:string):Observable<any>{
    return this.http.post<any>(`${this.baseUrl}signUp`,{email,password})
  }
  signIn(email:string,password:string):Observable<any>{
    return this.http.post<any>(`${this.baseUrl}signIn`,{email,password}).pipe(
      map(
        response=>{
          sessionStorage.setItem("email",response.email);
          sessionStorage.setItem("token",`Bearer ${response.token}`);
          return response;
        }
      )
      
    )
  }
  getAuthentication(){
    return sessionStorage.getItem("email");
  }
  getToken(){
    if(this.getAuthentication()==null||this.getAuthentication()===""){
      return "";
    }
    return sessionStorage.getItem("token");
  }
  isLogin(){
   return !(this.getToken()===""||this.getToken()==null||
    this.getAuthentication()===""||this.getAuthentication()==null);
  }
  logOut(){
    sessionStorage.removeItem("email");
    sessionStorage.removeItem("token");
  }

}
