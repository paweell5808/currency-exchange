import { Component, OnInit } from '@angular/core';
import { SessionStorageService } from './service/session/session-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'currency-exchange';

  isLoggedIn: boolean = false;
  userName = '';

  constructor (private sessionStorage: SessionStorageService) {
  }

  ngOnInit () {
    this.isLoggedIn = !!this.sessionStorage.user;
    this.userName = this.sessionStorage.user;
  }
}
