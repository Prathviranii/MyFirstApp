import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrer',
  templateUrl: './carrer.component.html',
  styleUrls: ['./carrer.component.css']
})
export class CarrerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

name = 'Prathvi';

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

}

//class for *ngFor demo
class Users
{
userid: string|undefined;
username: string | undefined;
}


  
    