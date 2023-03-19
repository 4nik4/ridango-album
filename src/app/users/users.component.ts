import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { User } from '../interfaces';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users?: Array<User>
  constructor(private api:ApiService) {}
  ngOnInit() {
    this.api.getUsers().subscribe((data)=>{
      this.users = data; 
    })
  }
}
