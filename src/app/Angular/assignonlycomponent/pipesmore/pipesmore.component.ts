import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipesmore',
  templateUrl: './pipesmore.component.html',
  styleUrls: ['./pipesmore.component.css']
})
export class PipesmoreComponent implements OnInit {
 
// common code all pages in put below code
  databindingtypes=['PIPE Custom','Pending1','Pending2','Pending3'];
  bindingStringFlag:any;
  binding:any;
  TitleGlobal:any;
  notShow:any=true;
//End

  birthday = new Date(1988, 3, 15); // April 15, 1988
  toggle = true; // start with true == shortDate
  power = 5;
  factor = 1;
  
  employeeData = [
    {'name':'Rajesh','Mob':'985498548','Gender':'Male'},
    {'name':'pan','Mob':'985498548','Gender':'Female'},
    {'name':'guru','Mob':'985498541','Gender':'Male'},
    {'name':'mock','Mob':'985498545','Gender':'Female'},
    {'name':'pencha','Mob':'985498e48','Gender':'Male'},
    {'name':'chota','Mob':'9854985r8','Gender':'Female'}
  ]
  constructor() { }

  ngOnInit() {
  }

  // Parameterizing a pipe

  get format()   { return this.toggle ? 'shortDate' : 'fullDate'; }
  
  toggleFormat() { this.toggle = !this.toggle; }


// Common code below here
  showBinding(value:any)
  {
      this.bindingStringFlag=value;
      this.binding=value;
      this.TitleGlobal=value;
  }
//End Above code

}
