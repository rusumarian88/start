import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-subtit-tit-descp',
  templateUrl: './subtit-tit-descp.component.html',
  styleUrls: ['./subtit-tit-descp.component.scss']
})
export class SubtitTitDescpComponent implements OnInit {

  @Input() subtitle:string=""
  @Input() title:string=""
  @Input() description:string=""
  @Input() centrat:boolean=false
  @Input() gray:boolean=false

  constructor() { }

  ngOnInit(): void {
  }

}
