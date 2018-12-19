import { Component, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  template: `
    <div class="modal-header" style="border-bottom: none; padding-bottom: 0;">
      <h3 class="card-title" *ngIf="!recoveryMode">Inloggen</h3>
      <h4 class="card-title" *ngIf="recoveryMode">Wachtwoord vergeten</h4>
      <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body" style="padding-top: 0;">
      <app-login-form (showRecoverForm)="showRecoverForm($event)" *ngIf="!recoveryMode"></app-login-form>
      <app-recovery-form *ngIf="recoveryMode" (showRecoverForm)="showRecoverForm($event)"></app-recovery-form>
      <hr>
      <p style="text-align: center;" class="d-block">Nog geen account?
      <button style="margin-top: -5px" class="btn btn-link p-0" (click)="navigateToSignUp()">Meld je gratis aan.</button></p>
    </div>
  `
})
export class LoginModalComponent {
  recoveryMode = false;
  constructor(public activeModal: NgbActiveModal,
              private router: Router) {}

  showRecoverForm(show: boolean) {
    this.recoveryMode = show;
  }

  navigateToSignUp() {
    this.activeModal.dismiss('Cross click');
    this.router.navigate(['/user/sign-up']);
  }
}
