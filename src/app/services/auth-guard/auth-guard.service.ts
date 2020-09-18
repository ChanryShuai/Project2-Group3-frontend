import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthTokenService } from '../cache/authToken/auth-token.service';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router:Router,private authService:AuthTokenService){}

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        if(this.authService.checkToken()){
            return true;
        }
        this.router.navigate(['home']);
        alert("SUPERHERO SHOWDOWN!!");
        return false;
    }


}