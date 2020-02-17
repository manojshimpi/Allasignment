import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directivemoretypes',
  templateUrl: './directivemoretypes.component.html',
  styleUrls: ['./directivemoretypes.component.css']
})
export class DirectivemoretypesComponent implements OnInit {

  databindingtypes=['Component Directives','Structural Directives','Attribute Directives'];
  bindingStringFlag:any;
  binding:any;
  TitleGlobal:any;
  color:string;
  urlpdf='http://localhost/demo21/finalsetup/allment/src/assets/pdf/angular_io_guide_attribute-directives.pdf';
  urlpdfstru='http://localhost/demo21/finalsetup/allment/src/assets/pdf/angular_io_guide_structural-directives.pdf';
  compoimage='./assets/image/component.png';
  

  constructor() { 
    //this.color = 'green';
  }

  ngOnInit() {
  }

  showBinding(value:any)
  {
      this.bindingStringFlag=value;
      this.binding=value;
      this.TitleGlobal=value;
  }

  
}
