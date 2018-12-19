import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-login-form',
  template: `
  <form #loginForm="ngForm" class="mb-3" (ngSubmit)="onSubmit(loginForm.value)" novalidate>
  <div class="form-group">
    <input
      type="email"
      [(ngModel)]="user.email"
      #email="ngModel"
      class="form-control"
      required
      name="email"
      [ngClass]="{'is-invalid': email.invalid && formSubmitted }"
      placeholder="E-mailadres">
    </div>
    <div class="form-group">
      <input
        type="password"
        [(ngModel)]="user.password"
        #password="ngModel"
        class="form-control mb-0"
        required
        name="password"
        [ngClass]="{'is-invalid': password.invalid && formSubmitted }"
        placeholder="Wachtwoord">
      <button type="button" class="btn btn-link px-0" (click)="this.showRecoverForm.emit(true)">
      <small id="emailHelp" class="form-text text-muted">Wachtwoord vergeten?</small>
      </button>
    </div>
    <button class="btn btn-outline-primary btn-block" (click)="loginWithFacebook()">
    <i class="fab fa-facebook-f mr-3"></i> Inloggen met Facebook</button>
    <button type="submit" class="btn btn-primary btn-block">Inloggen</button>
    <div *ngIf="errorMessage.length > 0">
      <div class="alert alert-danger" role="alert" *ngFor="let message of errorMessage">
        {{ message }}
      </div>
    </div>
  </form>

  `
})
export class LoginFormComponent implements OnInit {
  @ViewChild('loginForm') loginForm;
  @Output('showRecoverForm') showRecoverForm = new EventEmitter<boolean>();
  user = new LoginUserModel();
  formSubmitted = false;
  errorMessage: string[] = [];
  public loading = false;

  constructor(
    private authService: AuthService,
    public afAuth: AngularFireAuth,
    private activeModal: NgbActiveModal
  ) {
    this.afAuth.authState.subscribe(state => {
      if (state) {
        this.activeModal.close();
      }
    });
  }

  ngOnInit(): void {}

  loginWithFacebook() {
    this.authService
      .loginWithFacebook()
      .then(res => {
        this.activeModal.close();
      })
      .catch(err => {
        this.errorMessage.push(err.message);
      });
  }

  onSubmit(user: LoginUserModel) {
    this.formSubmitted = true;
    if (this.loginForm.valid) {
      this.authService.loginWithEmail(user)
      .then(res => {
        console.log(res);
        this.activeModal.dismiss('Cross click');
      }, err => {
        console.log(err);
        this.errorMessage.push(err.message);
      });
    }
  }
}
export class LoginUserModel {
  email: string;
  password: string;
  passwordConfirm: string;
}
