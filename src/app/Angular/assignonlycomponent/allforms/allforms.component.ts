import { Component, OnInit } from '@angular/core';
import { Hero } from './hero.model';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { MustMatch } from './helper/must-macth';
import { ValueTransformer } from '@angular/compiler/src/util';

@Component({
  selector: 'app-allforms',
  templateUrl: './allforms.component.html',
  styleUrls: ['./allforms.component.css']
})
export class AllformsComponent implements OnInit {

// Reactive Form
registerForm: FormGroup;
submitted = false;
arraygender=['Female','Male'];

Data: Array<any> = [
  { name: 'Cricket', value: 'cricket' },
  { name: 'Dancing', value: 'dancing' }
  
];

countries = [
{
  id: '1',
  name: 'INDIA',
  code: 'Rs'
  },
{
  id: '2',
  name: 'USA',
  code: 'USD'
 },
 {
  id: '3',
  name: 'Canada',
  code: 'CAD'
 },
 {
  id: '4',
  name: 'UK',
  code: 'GBP'
 }]

 
 //End 


// start common code below
databindingtypes=['Dynamic Form','Reactive Form','Event Binding','Two Way Data Binding'];
bindingStringFlag:any;
binding:any;
TitleGlobal:any;
notShow:any=true;
//End 

// Object create 
 home = new Hero();
 dataarray=[];

  constructor(private formBuilder: FormBuilder) { }

  

  ngOnInit() {
  
   // Reactive Form
    this.registerForm = this.formBuilder.group({
      firstName: ['manoj', Validators.required],
      lastName: ['shimpi', Validators.required],
      email: ['d@gmail.com', [Validators.required, Validators.email]],
      password: ['manojshimpi', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['manojshimpi', Validators.required],
      gender:['',Validators.required],
      acceptTerms: [true, Validators.requiredTrue],
      countryControl: ['',Validators.required],
      hobbies: this.formBuilder.array([], [Validators.required])
      }, {
        validator: MustMatch('password', 'confirmPassword')
    });
    
    // Other Form Code
    this.home = new Hero();
    this.dataarray.push(this.home);
  }

  get f() { return this.registerForm.controls; }

  // This code is used for checkbox purpose
  onCheckboxChange(e) {
    const hobbies: FormArray = this.registerForm.get('hobbies') as FormArray;
    if (e.target.checked) {
      hobbies.push(new FormControl(e.target.value));
    } 
    else
     {
        let i: number = 0;
        hobbies.controls.forEach((item: FormControl) => {
        if (item.value == e.target.value) 
        {
          hobbies.removeAt(i);
          return;
        }
        i++;
      });
    }
    
  }


  // Reactive Form
 
  
//Common code
showBinding(value:any)
{
    this.bindingStringFlag=value;
    this.binding=value;
    this.TitleGlobal=value;
}
//End

// Reactive Forms
onSubmit1() {
  this.submitted = true;

  // stop here if form is invalid
  if (this.registerForm.invalid) {
      return;
  }
  console.log(this.f.hobbies.value);
  alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))
}
//End

addForm()
{
  this.home = new Hero();
  this.dataarray.push(this.home);
}

onSubmit()
{
  
  alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.dataarray))
}

Remove(index){
  this.dataarray.splice(index);
}

}
