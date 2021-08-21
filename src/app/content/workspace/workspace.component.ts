import { Component, OnInit, OnDestroy } from '@angular/core';
import {CurrenciesService} from '../../service/workspace/currencies.service';
import {Subject, Subscription, timer} from 'rxjs';
import {switchMap} from 'rxjs/operators';
import {Currencies} from '../../service/workspace/interface/currencies';
import {UserService} from '../../service/user/user.service';
import {SessionStorageService} from '../../service/session/session-storage.service';

@Component({
  selector: 'app-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.scss']
})
export class WorkspaceComponent implements OnInit, OnDestroy {

  subscription: Subscription = new Subscription();
  dataSource: Subject<Currencies[]> = new Subject<Currencies[]>();

  time: string = '';
  availablePln: number = 0;
  isLoading = true;

  constructor(private currenciesService: CurrenciesService, private userService: UserService,
              private sessionStorage: SessionStorageService) { }

  ngOnInit(): void {
    this.subscription = timer(0, 20000).pipe(
      switchMap(() => this.currenciesService.getCurrencies())
    ).subscribe(response => {
      this.userService.getUserCurrencies(this.sessionStorage.user).subscribe(userCurrencies => {
        let items = response.items;
        items.map(item => {
          item.amount = Number(userCurrencies[item.code]);
          item.totalValue = Math.round(userCurrencies[item.code] * item.purchasePrice);
          return item;
        });

        this.isLoading = false;
        this.dataSource.next(items);
        this.time = response.publicationDate;
        this.availablePln = Number(userCurrencies['PLN']);
      }, error => {
        console.log(error);
      });
    }, error => {
      this.isLoading = false;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
