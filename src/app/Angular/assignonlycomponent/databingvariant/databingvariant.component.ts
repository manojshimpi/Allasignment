import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databingvariant',
  templateUrl: './databingvariant.component.html',
  styleUrls: ['./databingvariant.component.css']
})
export class DatabingvariantComponent implements OnInit {
 // start common code below
  databindingtypes=['String Interpolation','Property Binding','Event Binding','Two Way Data Binding'];
  bindingStringFlag:any;
  binding:any;
  TitleGlobal:any;
  notShow:any=true;
//End 

  imagepath:any='../assets/image/stringbinding.png';
  twowaydatabinding:any='../assets/image/two-way-binding.png';
  


  // String Binding
  items= {
    title: 'Foot Ball',
    price: 700
   };

  // Property vlaue Binding
  myBlog: string = "My First Angular Blog";

  // Two Way Data Binding
  ngname:any="manoj shimpi";
  constructor() { }
  

  // Event Data Binding
  additems() {
    alert('A user expects a UI to respond to her/his actions on the page. Every such action would trigger an event on the page and the page has to respond by listening to these events like clicks, keystrokes, change events,');
  }

  ngOnInit() 
  {
    
  }
  
//Common code
  showBinding(value:any)
  {
      this.bindingStringFlag=value;
      this.binding=value;
      this.TitleGlobal=value;
  }
//End
  

}
