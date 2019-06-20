import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanLoad, UrlSegment, Route, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CommonService } from './common.service';

@Injectable({
  providedIn: 'root'
})

//authgaurd implementation
export class AdminGuard  {

  userdata: any;
  constructor(private myRoute: Router) {}
  
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) : Observable<boolean> | Promise<boolean> | boolean {
    if ((localStorage.getItem('email') == 'abc@gmail.com') && (localStorage.getItem('password') == '123456'))
     {
      return true;
    }
    else 
    {
      console.log("in false condition of canactivate");
      this.myRoute.navigate(['']);
      return false;
    }
  }
}
