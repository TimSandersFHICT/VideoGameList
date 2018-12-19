import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup-form',
  template: `
  <div class="card border-primary mb-3" style="">
    <div class="card-body" *ngIf="!success">
      <h2 class="card-title">Registreren
      <p class="lead mt-1">Maak een persoonlijk account aan.</p>
      </h2>
      <button type="submit" (click)="loginWithFacebook()"
        class="btn btn-lg btn-outline-primary btn-block" [disabled]="facebookLoading">
        <div class="sp sp-circle" *ngIf="facebookLoading"></div>
        <span *ngIf="!facebookLoading">
        <i class="fab fa-facebook-f mr-3"></i> Registreer met Facebook
        </span>
      </button>
      <hr>
      <label class="muted">Of gebruik je e-mailadres</label>
      <form
        #registerForm="ngForm"
        class="mb-3"
        (ngSubmit)="onSubmit(registerForm.value)">
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
            class="form-control"
            required
            name="password"
            [ngClass]="{'is-invalid': password.invalid && formSubmitted }"
            placeholder="Wachtwoord">
        </div>
        <div class="form-group">
          <input
            type="password"
            [(ngModel)]="user.passwordConfirm"
            #passwordConfirm="ngModel"
            class="form-control"
            required
            name="passwordConfirm"
            [ngClass]="{'is-invalid': passwordConfirm.invalid && formSubmitted }"
            placeholder="Herhaal Wachtwoord">
        </div>
        <div class="form-group">
          <div class="custom-control custom-checkbox">
            <input
              [(ngModel)]="termsAccepted"
              name="termsAccepted"
              type="checkbox"
              class="custom-control-input"
              id="termsAccepted">
            <label
              class="custom-control-label"
              for="termsAccepted">
              Door te registreren ga je akkoord met de
              <a href="">accountvoorwaarden</a> en het <a href="#">privacybeleid</a>
            </label>
          </div>
        </div>
        <button type="submit" class="btn btn-lg btn-primary btn-block" [disabled]="loading">
          <div class="sp sp-circle" *ngIf="loading"></div><span *ngIf="!loading">Aanmelden</span>
        </button>
      </form>
      <div *ngIf="errorMessage.length > 0">
        <div class="alert alert-danger" role="alert" *ngFor="let message of errorMessage">
          {{ message }}
        </div>
      </div>
      <br>
      <label>Heb je al een account? <a href="">Log in</a></label>
    </div>
    <div *ngIf="success">
      <p>Je bent succesvol geregistreerd. Je kan nu inloggen.</p>
    </div>
  </div>
  `
})
export class SignUpFormComponent implements OnInit {
  @ViewChild('registerForm') registerForm;
  user = new RegisterUserModel();
  formSubmitted = false;
  valid = true;
  errorMessage: string[] = [];
  termsAccepted = false;
  public loading = false;
  public facebookLoading = false;
  public success = false;

  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit(): void { }

  loginWithFacebook() {
    this.facebookLoading = true;
    this.authService.loginWithFacebook().then(res => {
        this.success = true;
        this.router.navigate(['/user/sign-up/success']);
      })
      .catch(err => {
        this.errorMessage.push(err.message);
      });
  }

  facebokDone() {}

  onSubmit(user: RegisterUserModel) {
    this.errorMessage = [];
    this.loading = true;
    this.formSubmitted = true;
    this.valid = true;
    if (this.user.password !== this.user.passwordConfirm) {
      this.loading = false;
      this.errorMessage.push('Passwords do not match');
      this.valid = false;
    }
    if (!this.termsAccepted) {
      this.loading = false;
      this.errorMessage.push('Accepteer de voorwaarden.');
      this.valid = false;
    }
    if (this.registerForm.valid && this.valid) {
      this.authService.registerWithEmail(user)
        .then(res => {
          console.log(res);
          this.loading = false;
          this.success = true;
          this.router.navigate(['/user/sign-up/success']);
        }, err => {
          this.loading = false;
          this.errorMessage.push(err.message);
        });
    }
  }


}



export class RegisterUserModel {
  email: string;
  password: string;
  passwordConfirm: string;
}
