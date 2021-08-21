import {Component, EventEmitter, Input, Output} from '@angular/core';
import { Router } from '@angular/router';
import {SessionStorageService} from '../../service/session/session-storage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  @Input() isLogged: boolean = false;
  @Input() userName = '';
  @Output() loggedIn = new EventEmitter<any>();

  constructor(private router: Router, private sessionStorage: SessionStorageService) {}

  goToMain(): void {
    this.router.navigate(['/']);
  }

  logout(): void {
    this.sessionStorage.signOut();
    this.loggedIn.emit(this.sessionStorage.user);
  }

}
