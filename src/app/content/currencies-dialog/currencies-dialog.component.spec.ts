import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrenciesDialogComponent } from './currencies-dialog.component';

describe('CurrenciesDialogComponent', () => {
  let component: CurrenciesDialogComponent;
  let fixture: ComponentFixture<CurrenciesDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrenciesDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrenciesDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
