import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup-page',
  template: `
  <div class="row">
    <div class="col-5 mx-auto">
     <app-signup-form></app-signup-form>
    </div>
  </div>
  `
})
export class SignUpPageComponent implements OnInit {
  constructor() { }

  ngOnInit(): void { }
}
