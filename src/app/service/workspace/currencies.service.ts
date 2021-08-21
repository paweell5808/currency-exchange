import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Currencies } from './interface/currencies';

@Injectable({
  providedIn: 'root'
})
export class CurrenciesService {

  constructor(private http: HttpClient) { }

  public getCurrencies(): Observable<{items: Currencies[], publicationDate: string}> {
    return this.http.get<{items: Currencies[], publicationDate: string}>('/currencies/');
  }
}
