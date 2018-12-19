import { Component, OnInit, EventEmitter, Output, ViewChild } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-recovery-form',
  template: `
  <div>
  <p>Vul je e-mailadres in en we sturen een e-mail waarmee je een nieuw wachtwoord kan aanvragen.</p>
  <form #requestResetForm="ngForm" class="mb-3" *ngIf="!successMessage" (ngSubmit)="onSubmit(requestResetForm.value)" novalidate>
          <div class="form-group">
            <input
              type="email"
              class="form-control"
              required
              name="email"
              [(ngModel)]="requestedEmail.email"
              #email="ngModel"
              [ngClass]="{'is-invalid': email.invalid && formSubmitted }"
              placeholder="E-mailadres">
          </div>
          <button class="btn btn-primary btn-block">Verzenden</button>
          <button class="btn btn-link btn-block"  (click)="this.showRecoverForm.emit(false)">Terug naar inloggen</button>
        </form>
        <div class="alert alert-danger" role="alert" *ngIf="errorMessage">
        {{ errorMessage }}
      </div>
      <div class="alert alert-success" role="alert" *ngIf="successMessage">
        {{ successMessage }}
      </div>
  </div>

  `
})
export class RecoveryFormComponent implements OnInit {
  @ViewChild('requestResetForm') requestResetForm;
  @Output('showRecoverForm') showRecoverForm = new EventEmitter<boolean>();
  requestedEmail: REQPWModel = new REQPWModel();
  formSubmitted = false;
  successMessage: string;
  errorMessage: string;
  public loading = false;

  constructor(private authService: AuthService) { }

  ngOnInit(): void { }

  onSubmit(requestedEmail: REQPWModel) {
    this.successMessage = null;
    this.errorMessage = null;
    this.formSubmitted = true;
    this.loading = true;
    this.authService.requestPasswordReset(requestedEmail.email)
      .then(res => {
        this.loading = false;
        this.successMessage = 'An email has been send, please click the link attached.';
      }).catch(err => {
        this.loading = false;
        this.errorMessage = err.message;
      });
  }

}

export class REQPWModel {
  email: string;
}
