import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RegisterUser } from './interface/register-user';
import { User } from './interface/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl = 'http://localhost/currency-exchange/php';

  constructor (private http: HttpClient) { }

  public register (params: Partial<RegisterUser>): Observable<any> {
    return this.http.post(this.baseUrl + '/register.php', params, {
      observe: 'response'
    });
  }

  public login (params: Partial<User>): Observable<any> {
    return this.http.post(this.baseUrl + '/login.php', params, {
      observe: 'response'
    });
  }

  public getUserCurrencies (name: string): Observable<any> {
    return this.http.get(this.baseUrl + '/currency.php', {
      params: {
        username: name
      }
    });
  }

  public updateCurrencies (params: any): Observable<any> {
    return this.http.put(this.baseUrl + '/currency-update.php', params);
  }

}
