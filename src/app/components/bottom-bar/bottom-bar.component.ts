import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bottom-bar',
  templateUrl: './bottom-bar.component.html',
  styleUrls: ['./bottom-bar.component.scss']
})
export class BottomBarComponent implements OnInit {

  icons=['/assets/icon-bb1.png','/assets/icon-bb2.png','/assets/icon-bb3.png','/assets/icon-bb4.png','/assets/icon-bb5.png','/assets/icon-bb6.png','/assets/icon-bb7.png']

  constructor() { }

  ngOnInit(): void {
  }

}
