import { Component, OnInit } from '@angular/core';

@Component({
  template: `
  <app-navbar></app-navbar>
  <div class="container mt-3">
    <router-outlet></router-outlet>
  </div>
  `
})
export class MainLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
