import { Component, OnInit } from '@angular/core';
import { FoodService } from './food.service';
import {NgbDateStruct, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';

import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

import {Observable} from 'rxjs';
import {debounceTime, distinctUntilChanged, map} from 'rxjs/operators';



interface Alert {
  type: string;
  message: string;
}
// array object to alert
const ALERTS: Alert[] = [{
  type: 'success',
  message: 'This is an success alert',
}, {
  type: 'info',
  message: 'This is an info alert',
}, {
  type: 'warning',
  message: 'This is a warning alert',
}, {
  type: 'danger',
  message: 'This is a danger alert',
}, {
  type: 'primary',
  message: 'This is a primary alert',
}, {
  type: 'secondary',
  message: 'This is a secondary alert',
}, {
  type: 'light',
  message: 'This is a light alert',
}, {
  type: 'dark',
  message: 'This is a dark alert',
}
];

const states = ['Alabama', 'Alaska', 'American Samoa', 'Arizona', 'Arkansas', 'California', 'Colorado',
  'Connecticut', 'Delaware', 'District Of Columbia', 'Federated States Of Micronesia', 'Florida', 'Georgia',
  'Guam', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine',
  'Marshall Islands', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana',
  'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota',
  'Northern Mariana Islands', 'Ohio', 'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico', 'Rhode Island',
  'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virgin Islands', 'Virginia',
  'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];

@Component({
  selector: 'app-test12',
  templateUrl: './test12.component.html',
  styleUrls: ['./test12.component.css'],
  providers: [NgbModalConfig, NgbModal]
})

export class Test12Component implements OnInit {
  
  // rating the code here
  public model1: any;
  currentRate = 5.61;
  formatter = (result: string) => result.toUpperCase();
  // used the calender code belo defined

  model: NgbDateStruct;
  date: {year: number, month: number};

  alerts: Alert[];
  
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  
  // i am using the toggle belo here code
  public isCollapsed = true;
 // End Code

  public Dataresult:any;
  public Dataresultmovies:any;
  constructor(private foodser:FoodService,private calendar: NgbCalendar,config: NgbModalConfig, private modalService: NgbModal) { 
  
  config.backdrop = 'static';
  config.keyboard = false;
  this.reset();
 
}

// this is code used for typehead of auto search

search = (text$: Observable<string>) =>
  text$.pipe(
    debounceTime(200),
    distinctUntilChanged(),
    map(term => term === '' ? []
      : states.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
  )

  //end code above


//Calender code below here

selectToday() {
  this.model = this.calendar.getToday();
}

open(content) {
  this.modalService.open(content);
}


// array object i am used it 
  close(alert: Alert) {
    this.alerts.splice(this.alerts.indexOf(alert), 1);
  }

  reset() {
    this.alerts = Array.from(ALERTS);
  }

  // Code End

  ngOnInit() {
    
    this.foodser.foods().subscribe(res=>{
        this.Dataresult = res;
        this.Dataresult.forEach(element => {
          if(element.name=='Donuts'){
            //this.Dataresult.push({id: 4, name: "manoj"});
          }
         });
    });


  this.foodser.Movies().subscribe(res=>{
      this.Dataresultmovies = res;
      this.Dataresultmovies.forEach(element => {
        //console.log(element.title);
      });
  });


}


ShowRecord(value)
{
  alert(value);
}


}
