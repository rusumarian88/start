import { Injectable } from '@angular/core';

export interface Person{
  image?:string;
  name?:string;
  function?:string;
}

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  people=[
    {
      image:"/assets/pers1.png",
      name:"Peg Legge",
      function:"CEO",
    },
    {
      image:"/assets/pers2.png",
      name:"Richard Guerra",
      function:"CTO",
    },
    {
      image:"/assets/pers3.png",
      name:"Alexandra Stolz",
      function:"DESIGNER",
    },
    {
      image:"/assets/pers4.png",
      name:"Janet Bray",
      function:"DEVELOPER",
    }
  ]

  constructor() { }
}
