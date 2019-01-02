import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LoginModalComponent } from '../../user/login/login-modal.component';
import { AngularFireAuth } from '@angular/fire/auth';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  template: `
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container">
    <a class="navbar-brand" [routerLink]="['/']"><i class="fas fa-horse mr-2"></i>  <b>Video Game List</b>
    </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02"
      aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
        <li class="nav-item active">
          <a class="nav-link" [routerLink]="['/']">Home <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" [routerLink]="['/game/overview']">Games</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" [routerLink]="['/developer/overview']">Developers</a>
        </li>
      </ul>
      <form class="form-inline my-2 my-lg-0">
        <div class="nav-item" *ngIf="afAuth?.user | async as user; else showLogin">
          <div ngbDropdown placement="bottom-right" class="d-inline-block mobile-100-w">
            <button class="btn btn-nav btn-primary mobile-100-w cursor-pointer-hover ml-2"
              id="userDropdown" ngbDropdownToggle><i class="far fa-user mr-2"></i> Account</button>
            <div ngbDropdownMenu aria-labelledby="userDropdown" class="w-100">
              <a class="dropdown-item" [routerLink]="['/user/settings']">Instellingen</a>
              <div class="dropdown-divider"></div>
              <button class="dropdown-item" (click)="logout()">Log out</button>
            </div>
          </div>
        </div>
        <ng-template #showLogin>
          <button class="btn btn-link my-2 my-sm-0" type="button" [routerLink]="['/user/sign-up']">Registreren</button>
          <button class="btn btn-primary my-2 my-sm-0" type="button" (click)="openLoginModal()">Inloggen</button>
        </ng-template>
      </form>
    </div>
  </div>
</nav>
  `
})
export class NavbarComponent implements OnInit {

  constructor(private modalService: NgbModal,
    public afAuth: AngularFireAuth) { }

    ngOnInit(): void { }

    openLoginModal() {
      const modalRef =
      this.modalService.open(LoginModalComponent,
        { centered: true, windowClass: 'purple-modal', size: 'sm' });
    }

    logout() {
      this.afAuth.auth.signOut();
    }

    isLoggedIn() {
      return this.afAuth.authState.pipe(first()).toPromise();
    }
}
