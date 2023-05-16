import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IntegerParameterGuard implements CanActivate {
  canActivate(
      next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | UrlTree {
    const parameterValue = next.params['parameterName'];
    const isInteger = Number.isInteger(parseInt(parameterValue));
    if (isInteger) {
      return true;
    } else {
      return false;
    }
  }
}
