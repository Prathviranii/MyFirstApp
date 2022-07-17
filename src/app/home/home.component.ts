import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  //String Interpolation
  title = 'Angular demo';
  name = 'Prathvi';
  random_number = ""

  //Property Binding
  image = "/assets/img1.jpg";


  //Event Binding
  onClick() {
    alert("I am an Event Binding.....!!!!!")
  }

  onClick1() {
    console.log("I am an Event Binding.....!!!!!")
  }


  //*ngFor
  users: Users[] = [
    {
      userid: "1",
      username: 'John'
    },
    {
      userid: "2",
      username: 'Jason'
    },
    {
      userid: "3",
      username: 'Ayush'
    },
    {
      userid: "4",
      username: 'Meera'
    },
    {
      userid: "5",
      username: 'Jay'
    },
    {
      userid: "6",
      username: 'Jack'
    }
  ]

   //ngClass
  //Using JavaScript object
  cssClass: CssClass = new CssClass();
  //ngClass using Array
  cssArray: string[] = ['red', 'size20'];



  //ngStyle
  mycolor:string='violet';
  getColor(country: any) {
    (2)
    switch (country) {
      case 'UK':
        return 'green';
      case 'USA':
        return 'brown';
      case 'HK':
        return 'red';
      default:
        return 'pink';
    }
  }
 

  people: any[] = [
    {
      "name": "John",
      "country": 'UK'
    },
    {
      "name": "Peter",
      "country": 'USA'
    },
    {
      "name": "Shaun",
      "country": 'HK'
    },
    {
      "name": "Paul",
      "country": 'UK'
    },
    {
      "name": "Sam",
      "country": 'USA'
    }
  ];

}

//class for *ngFor demo
class Users
{
  userid: string|undefined;
  username: string | undefined;
}

//ngClass Using JavaScript object
class CssClass {
  red: boolean = true;
  size20: boolean = true;
}