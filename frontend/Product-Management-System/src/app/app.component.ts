import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private auth:AuthenticationService,
              private router:Router){}
  ngOnInit(): void {
  }
  title = 'Product Management System ';
  logOut(){
    sessionStorage.removeItem("email");
    sessionStorage.removeItem("token");
    
    this.router.navigate(["/signIn"]);
  }
  isLogin(){
    return this.auth.isLogin();
  }
}

