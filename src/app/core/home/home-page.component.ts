import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styles: [`
    .jumbotron {
      background-size: cover;
      border: 1px solid #593196;
    }
    .card {
      border: 1px solid #EFA31D!important;
    }
  `]
})
export class HomePageComponent implements OnInit {
  constructor() { }

  ngOnInit(): void { }
}
