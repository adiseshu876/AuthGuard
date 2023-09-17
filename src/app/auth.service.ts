import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  // getToken() {
  //   const userResponse = {
  //     token: 'abcdefghijklmnopqrstuvwxyz1234567890',
  //     userRoles: ['user', 'x', 'y'],
  //     isValidAdmin: ['admin', 'user', 'superAdmin'],
  //   };
  //   return userResponse;
  // }
  // isProductChecking() {
  //   const ProductResponse = {
  //     token: 'abcdefghijklmnopqrstuvwxyz1234567890',
  //     isValidate: ['cart', 'paymentMethods', 'cardData'],
  //   };
  // }
  productPageChecking() {
    const ProductResponse = {
      token: 'abcdefghijklmnopqrstuvwxyz123445667790',
      isProductPageAccessible: ['admin', 'superAdmin'],
    };
    return ProductResponse;
  }
  HomePageChecking() {
    const HomeResponse = {
      token: 'abcdefghijklmnopqrstuvwxyz123445667790',
      isHomePageAccessible: ['user', 'admin', 'superAdmin'],
    };
  }
}
