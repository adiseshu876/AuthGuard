import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  getToken() {
    const userResponse = {
      token: 'abcdefghijklmnopqrstuvwxyz1234567890',
      userRoles:['user','x','y']
    };
    return userResponse;
  }
}
