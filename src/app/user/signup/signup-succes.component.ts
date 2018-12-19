import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup-success',
  template: `
  <div class="row">
  <div class="col-5 mx-auto">
  <div class="card border-primary mb-3" style="">
    <div class="card-body">
    <h2 class="card-title">Welkom!
    <p class="lead mt-1">Je bent succesvol aangemeld.</p></h2>
    <p>Je kan nu bijna aan de slag,
    maar activeer eerst je account door de op de link te klikken die we je hebben verzonden per email.</p>
    </div>
  </div>
  </div>

  `
})
export class SignUpSuccessComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
