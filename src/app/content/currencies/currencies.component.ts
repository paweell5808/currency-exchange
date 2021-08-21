import {Component, OnInit, OnDestroy, Input} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {Currencies} from '../../service/workspace/interface/currencies';
import {Observable, Subscription, } from 'rxjs';
import {MatDialog} from '@angular/material/dialog';
import {CurrenciesDialogComponent} from '../currencies-dialog/currencies-dialog.component';

@Component({
  selector: 'app-currencies',
  templateUrl: './currencies.component.html',
  styleUrls: ['./currencies.component.scss']
})
export class CurrenciesComponent implements OnInit, OnDestroy {
  @Input() data: Observable<Currencies[]>;
  @Input() isLoading: boolean = true;
  @Input() availablePln: number = 0;
  @Input() time: string = '';

  displayedColumns: string[] = ['code', 'unit', 'sellPrice', 'actions'];
  dataSource: MatTableDataSource<Currencies> = new MatTableDataSource<Currencies>();

  subscription: Subscription = new Subscription();

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    this.subscription = this.data.subscribe(items => {
      this.dataSource.data = items;
      this.dataSource._updateChangeSubscription();
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onElement(options: Currencies): void {
    const dialogRef = this.dialog.open(CurrenciesDialogComponent);

    dialogRef.componentInstance.options = options;
    dialogRef.componentInstance.availablePln = this.availablePln;
    dialogRef.componentInstance.time = this.time;
  }

}
