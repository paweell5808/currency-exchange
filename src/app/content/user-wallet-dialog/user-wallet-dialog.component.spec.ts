import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserWalletDialogComponent } from './user-wallet-dialog.component';

describe('UserWalletDialogComponent', () => {
  let component: UserWalletDialogComponent;
  let fixture: ComponentFixture<UserWalletDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserWalletDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserWalletDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
