import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-dashexpress',
  templateUrl: './dashexpress.component.html',
  styleUrls: ['./dashexpress.component.css']
})
export class DashexpressComponent implements OnInit {

  constructor(private router :Router) { }

  ngOnInit() {
  }

}
