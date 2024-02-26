import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-price-card',
  templateUrl: './price-card.component.html',
  styleUrls: ['./price-card.component.scss']
})
export class PriceCardComponent implements OnInit {

  @Input() subtitle:string=""
  @Input() price:string=""
  @Input() textSmall:string=""
  @Input() description:string=""
  @Input() icons:string[]=[]
  @Input() texts:string[]=[]
  @Input() button:string=""


  constructor() { }

  ngOnInit(): void {
  }

}
