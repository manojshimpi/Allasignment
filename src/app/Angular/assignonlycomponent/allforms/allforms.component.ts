import { Component, OnInit } from '@angular/core';
import { Hero } from './hero.model';

@Component({
  selector: 'app-allforms',
  templateUrl: './allforms.component.html',
  styleUrls: ['./allforms.component.css']
})
export class AllformsComponent implements OnInit {

// start common code below
databindingtypes=['Dynamic Form','Property Binding','Event Binding','Two Way Data Binding'];
bindingStringFlag:any;
binding:any;
TitleGlobal:any;
notShow:any=true;
//End 

// Object create 
 home = new Hero();
 dataarray=[];

  constructor() { }

  ngOnInit() {
    this.home = new Hero();
    this.dataarray.push(this.home);
  }

//Common code
showBinding(value:any)
{
    this.bindingStringFlag=value;
    this.binding=value;
    this.TitleGlobal=value;
}
//End
addForm()
{
  this.home = new Hero();
  this.dataarray.push(this.home);
}

onSubmit()
{
  console.log(this.dataarray);
}

Remove(index){
  this.dataarray.splice(index);
}

}
