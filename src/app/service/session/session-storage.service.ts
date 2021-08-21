import { Injectable } from '@angular/core';

const USER_KEY = 'user-key';

@Injectable({
  providedIn: 'root'
})
export class SessionStorageService {

  constructor () { }

  public get user (): any {
    return window.sessionStorage.getItem(USER_KEY);
  }

  public signOut (): void {
    window.sessionStorage.clear();
  }

  public saveUser (user: string): void {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, user);
  }
}
