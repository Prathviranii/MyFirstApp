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

  //ngStyle
  mycolor:string='yellow';

}

//class for *ngFor demo
class Users
{
  userid: string|undefined;
  username: string | undefined;
}

