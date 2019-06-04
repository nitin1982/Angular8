import { Component, OnInit } from '@angular/core';
import { User } from '../IUser';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: User[];
  constructor() { }

  ngOnInit() {
    this.users = [
      { FName: 'John', LName: 'Smith', EmpId: 10121, 
        Email: 'john.smith@gmail.com' },
      { FName: 'Sam', LName: 'Marker', EmpId: 10122, 
        Email: 'Sam.Marker@gmail.com' }];
  }

}
