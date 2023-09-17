import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard {
  constructor(private service: AuthService, private route: Router) {}
  canActivate(route: ActivatedRouteSnapshot): boolean {
    const access = route.data['access'];
    console.log('*****access*******', access); // admin
    const homeResponse = this.service.productPageChecking();
    console.log('******userResponse***', homeResponse);
    if (
      homeResponse.token &&
      homeResponse.isProductPageAccessible.includes(access)
    ) {
      return true;
    } else {
      this.route.navigateByUrl('/login');
      return false;
    }
  }
  // canActivateChild(route: ActivatedRouteSnapshot): boolean {
  //   if(this.service.productPageChecking()){
  //     return true;
  //   }
  //   this.route.navigateByUrl('/home');
  //   return false;
  // }
}
// canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
//   return true;
// }

//   const roles = route.data['roles'];
//   console.log('*****role*******', roles); // admin
//   const isAdmin = route.data['isAdmin'];
//   console.log('*****role*******', isAdmin); // admin
//   const userResponse = this.service.getToken();
//   console.log('******userResponse***', userResponse);
//   if (
//     userResponse.token &&
//     userResponse.userRoles.includes(roles)
//   ) {
//     return true;
//   } else if (
//     userResponse.token &&
//       userResponse.isValidAdmin.includes(isAdmin)
//   ) {
//    // this.route.navigateByUrl('/productDetails');
//     return true;
//   } else {
//     this.route.navigateByUrl('/login');
//     return false;
//   }
// }
// const ProductResponse = this.service.isProductChecking()
// if (ProductResponse.token && ProductResponse.isProductChecking) {

// } else {

// }
// }
// canActivate(route: ActivatedRouteSnapshot): boolean {
//   const roles = route.data['roles'];
//   console.log('*****role*******', roles);
//   const isMain = route.data['isMain']; // admin
//   console.log('*************isMain**********',isMain);

//   const userResponse = this.service.getToken();
//   console.log('******userResponse***', userResponse);
//   if (userResponse.token && userResponse.userRoles && userResponse.isValidAdmin.includes(isMain,roles)) {
//     return true;
//   } else {
//     this.route.navigateByUrl('/login');
//     return false;
//   }
// }
// }
