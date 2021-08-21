import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RegisterComponent } from './content/register/register.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './content/login/login.component';
import { NavbarComponent } from './content/navbar/navbar.component';
import { WorkspaceComponent } from './content/workspace/workspace.component';
import { CurrenciesComponent } from './content/currencies/currencies.component';
import { MatTableModule } from '@angular/material/table';
import { UserWalletComponent } from './content/user-wallet/user-wallet.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialogModule } from '@angular/material/dialog';
import { CurrenciesDialogComponent } from './content/currencies-dialog/currencies-dialog.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { UserWalletDialogComponent } from './content/user-wallet-dialog/user-wallet-dialog.component';
import { PageNotFoundComponent } from './content/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    NavbarComponent,
    WorkspaceComponent,
    CurrenciesComponent,
    UserWalletComponent,
    CurrenciesDialogComponent,
    UserWalletDialogComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDividerModule,
    MatToolbarModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    HttpClientModule,
    MatSnackBarModule,
    AppRoutingModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
