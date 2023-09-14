import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private service: AuthService, private route: Router) {}
  canActivate(route: ActivatedRouteSnapshot): boolean {
    const role = route.data['roles'];
    console.log('*****role*******', role);// admin
    const userResponse = this.service.getToken();
    console.log('******userResponse***', userResponse);
    if (userResponse.token && userResponse.userRoles.includes(role)) {
      return true;
    } else {
      this.route.navigateByUrl('/login');
      return false;
    }
  }
}
