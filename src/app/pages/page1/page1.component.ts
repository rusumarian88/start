import { Component, Input, OnInit } from '@angular/core';
import { PeopleService } from 'src/app/services/people.service';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.scss']
})
export class Page1Component implements OnInit {
  
  // @Input() icon:string=""

  partners=['/assets/partner1.png','/assets/partner2.png','/assets/partner3.png','/assets/partner4.png','/assets/partner5.png']

  constructor(
    public peopleService:PeopleService,
  ) { }

  ngOnInit(): void {
  }

}
