import { Component } from '@angular/core';
import {Currencies} from '../../service/workspace/interface/currencies';
import {UserService} from '../../service/user/user.service';
import {SessionStorageService} from '../../service/session/session-storage.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-currencies-dialog',
  templateUrl: './currencies-dialog.component.html',
  styleUrls: ['./currencies-dialog.component.scss']
})
export class CurrenciesDialogComponent {
  options: Currencies;
  availablePln: number = 0;
  time: string = '';
  value = 0;
  confirmBuy = false;

  constructor(private userService: UserService, private sessionStorage: SessionStorageService,
              private snackBar: MatSnackBar) { }


  getMaxValueToBuy(): number {
    return Math.floor(this.availablePln / this.options.sellPrice);
  }

  buyCurrency(): void {
    const config = {
      username: this.sessionStorage.user,
      [this.options.code]: this.value,
      PLN: Math.floor(this.availablePln - (this.value * this.options.sellPrice))
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
