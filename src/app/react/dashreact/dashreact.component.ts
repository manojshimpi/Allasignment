import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashreact',
  templateUrl: './dashreact.component.html',
  styleUrls: ['./dashreact.component.css']
})
export class DashreactComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

}
