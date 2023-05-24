import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Route, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from 'src/app/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class LogInActivateService implements CanActivate{

  constructor(private auth:AuthenticationService,
              private router:Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if(this.auth.isLogin()){
      this.router.navigateByUrl("getALLProducts");
      return false;
    }
    
    return true;
  }
}
