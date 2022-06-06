import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private auht:AuthService , private router :Router){

  }
  canActivate()
     {
     if(this.auht.IsLoggedIn()){
      return true;
     } 
     alert('you have not logged In');
    this.router.navigate(['login']);
    return false;
  }
  
}
