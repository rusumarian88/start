import { Injectable } from '@angular/core';

export interface Price{
  subtitle?:string;
  price?:string;
  textSmall?:string;
  description?:string;
  icons?:string[];
  texts?:string[];
  button?:string;
}

@Injectable({
  providedIn: 'root'
})
export class PricesService {

  prices=[
    {
      subtitle:"Basic",
      price:"$100",
      textSmall:"/month",
      description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam",
      icons:['/assets/check-icon.png','/assets/check-icon.png','/assets/check-icon.png','/assets/check-icon.png','/assets/check-icon.png'],
      texts:['Lorem ipsum, dolor sit','Lorem ipsum, dolor sit','Lorem ipsum, dolor sit','Lorem ipsum, dolor sit','Lorem ipsum, dolor sit'],
      button:"Learn More",
      features:[
        {
          icon:"",
          text:""
        }
      ]
    },
    {
      subtitle:"Plus",
      price:"$250",
      textSmall:"/month",
      description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam",
      icons:['/assets/check-icon.png','/assets/check-icon.png','/assets/check-icon.png','/assets/check-icon.png','/assets/check-icon.png'],
      texts:['Lorem ipsum, dolor sit','Lorem ipsum, dolor sit','Lorem ipsum, dolor sit','Lorem ipsum, dolor sit','Lorem ipsum, dolor sit'],
      button:"Learn More",
    },  
    {
      subtitle:"Pro",
      price:"$400",
      textSmall:"/month",
      description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam",
      icons:['/assets/check-icon.png','/assets/check-icon.png','/assets/check-icon.png','/assets/check-icon.png','/assets/check-icon.png'],
      texts:['Lorem ipsum, dolor sit','Lorem ipsum, dolor sit','Lorem ipsum, dolor sit','Lorem ipsum, dolor sit','Lorem ipsum, dolor sit'],
      button:"Learn More",
    }
  ]

  constructor() { }
}
