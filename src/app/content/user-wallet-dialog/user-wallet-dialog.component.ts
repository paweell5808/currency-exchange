import { Component, OnInit } from '@angular/core';
import {Currencies} from '../../service/workspace/interface/currencies';
import {UserService} from '../../service/user/user.service';
import {SessionStorageService} from '../../service/session/session-storage.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-user-wallet-dialog',
  templateUrl: './user-wallet-dialog.component.html',
  styleUrls: ['./user-wallet-dialog.component.scss']
})
export class UserWalletDialogComponent implements OnInit {
  options: Currencies;
  availablePln: number = 0;
  time: string = '';
  value = 0;
  confirmSell = false;

  constructor(private userService: UserService, private sessionStorage: SessionStorageService,
              private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  getMaxValueToBuy(): number {
    return this.options.amount as number;
  }

  buyCurrency(): void {
    const config = {
      username: this.sessionStorage.user,
      [this.options.code]: this.options.amount as number - this.value,
      PLN: Math.floor(this.availablePln + (this.value * this.options.purchasePrice))
    };
    this.userService.updateCurrencies(config).subscribe(() => {
      this.snackBar.open('You have successfully purchased a currency!', 'Close', {
        duration: 4000
      });
      this.reloadComponent();
    }, error => {
      this.snackBar.open('ERROR! Currency purchase has failed', 'Close', {
        duration: 4000
      });
    });
  }

  reloadComponent() {
    window.location.reload();
  }
}
