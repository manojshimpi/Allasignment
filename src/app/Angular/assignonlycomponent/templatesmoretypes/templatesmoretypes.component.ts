import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templatesmoretypes',
  templateUrl: './templatesmoretypes.component.html',
  styleUrls: ['./templatesmoretypes.component.css']
})
export class TemplatesmoretypesComponent implements OnInit {

  months = ["January", "February", "March", "April", "May", "June", "July", 
  "August", "September", "October", "November", "December"]; 
  isavailable = false; // variable is set to true
  
  constructor() { }

  ngOnInit() 
  {
  }


  myClickFunction(event)
 { 
    //just added console.log which will display the event details in browser on click of the button. 
    this.isavailable = !this.isavailable; 
    console.log(event); 
 }

 changemonths(event) 
 { 
    alert("Changed month from the Dropdown"); 
 } 
 

}
