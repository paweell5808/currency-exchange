import {Component, ViewChild} from '@angular/core';
import { RegisterUser } from '../../service/user/interface/register-user';
import { UserService } from '../../service/user/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  @ViewChild('registerForm') form: any;

  model: Partial<RegisterUser> = {};
  hide: boolean = true;

  constructor(private userService: UserService, private snackBar: MatSnackBar, private router: Router) { }

  registerUser(): void {
    this.userService.register(this.model).subscribe(() => {
      this.router.navigate(['/']);
      this.snackBar.open('User ' + this.model.username + ' has been successfully registered', 'Close', {
        duration: 4000
      });
    }, error => {
      let errorText = error.status === 409 ?
        'User with the same username or email already exist' : 'Could not create new user, please try again later!';
      this.snackBar.open(errorText, 'Close', {
        duration: 4000
      });
    });
  }

  back(): void {
    this.router.navigate(['/']);
  }

}
