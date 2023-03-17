import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: any
  constructor(private api:ApiService) {}
  ngOnInit() {
    this.api.getUsers().subscribe((data)=>{
      this.users = data; 
    })
  }
}
