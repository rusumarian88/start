import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.scss']
})
export class Page2Component implements OnInit {

  portfolios=['/assets/port1.png','/assets/port2.png','/assets/port3.png','/assets/port4.png','/assets/port5.png','/assets/port6.png','/assets/port7.png','/assets/port8.png',]

  constructor() { }

  ngOnInit(): void {
  }

}
