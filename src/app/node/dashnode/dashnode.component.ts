import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashnode',
  templateUrl: './dashnode.component.html',
  styleUrls: ['./dashnode.component.css']
})
export class DashnodeComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit() {
  }

}
