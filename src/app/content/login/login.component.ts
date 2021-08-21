import {Component, ViewChild, EventEmitter, Output} from '@angular/core';
import {UserService} from '../../service/user/user.service';
import {User} from '../../service/user/interface/user';
import {Router} from '@angular/router';
import {SessionStorageService} from '../../service/session/session-storage.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  @ViewChild('loginForm') form: any;
  @Output() loggedIn = new EventEmitter<any>();

  model: Partial<User> = {};
  hide: boolean = true;

  constructor(private userService: UserService, private router: Router,
              private sessionStorage: SessionStorageService, private snackBar: MatSnackBar) { }

  login(): void {
    this.userService.login(this.model).subscribe(response => {
      this.form.resetForm();
      this.sessionStorage.saveUser(response.body.name);
      this.loggedIn.emit(this.sessionStorage.user);
    }, error => {
      this.snackBar.open('Login failed. Check the entered data', 'Close', {
        duration: 4000
      });
    });
  }

  goToRegister(): void {
    this.router.navigate(['/register']);
  }

}
