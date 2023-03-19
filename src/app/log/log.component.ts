import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.scss']
})
export class LogComponent implements OnInit {
  logs: any;
  constructor() { }

  ngOnInit(): void {
    this.logs = JSON.parse(localStorage.getItem("logs") || "[]")
  }

}
