import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router , ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-childtoparenth',
  templateUrl: './childtoparenth.component.html',
  styleUrls: ['./childtoparenth.component.css']
})
export class ChildtoparenthComponent implements OnInit {
 
  pdfSrc12: any;
  pdfflag = true;
  pdfglobal:any;

 

  allpdffiles:any=[
    {'no':'1','File':'https://www.tutorialspoint.com/angular7/angular7_tutorial.pdf','filename':'Angular 7','types':'Tutorial','color':'green','colortext':'white'},
    {'no':'2','File':'http://localhost/demo21/finalsetup/allment/src/assets/pdf/demo2.pdf','filename':'Angular Cheat Sheet','types':'Tutorial','color':'green' ,'colortext':'white'},
    {'no':'3','File':'http://localhost/demo21/finalsetup/allment/src/assets/pdf/demo3.pdf','filename':'Cli','types':'cli','color':'#a6a832','colortext':'white'},
    {'no':'4','File':'http://localhost/demo21/finalsetup/allment/src/assets/pdf/demo.pdf','filename':'Github','types':'Github','color':'pink','colortext':'white'},
    {'no':'5','File':'http://localhost/demo21/finalsetup/allment/src/assets/pdf/demo4.pdf','filename':'Angular Reactive Forms Cheat Sheet 8','types':'Tutorial','color':'green','colortext':'white'},
    {'no':'6','File':'http://localhost/demo21/finalsetup/allment/src/assets/pdf/demo6.pdf','filename':'Angular Diff','types':'Tutorial','color':'green','colortext':'white'},
    {'no':'7','File':'http://localhost/demo21/finalsetup/allment/src/assets/pdf/interview-8.pdf','filename':'Angular 8 interview','types':'interview' ,'color':'#bd350b','colortext':'white'},
    {'no':'8','File':'http://localhost/demo21/finalsetup/allment/src/assets/pdf/interview-1.pdf','filename':'Angular 8 interview','types':'interview','color':'#bd350b','colortext':'white'},
    {'no':'9','File':'http://localhost/demo21/finalsetup/allment/src/assets/pdf/interview-2.pdf','filename':'Angular 8 interview','types':'interview','color':'#bd350b','colortext':'white'},
    {'no':'10','File':'http://localhost/demo21/finalsetup/allment/src/assets/pdf/Angular-6.pdf','filename':'Angular Tutorial 6','color':'green','colortext':'white'},
    {'no':'11','File':'http://localhost/demo21/finalsetup/allment/src/assets/pdf/angular-6-interview-questions.pdf','filename':'Angular 6 interview','types':'interview','color':'#bd350b','colortext':'white'},
    {'no':'13','File':'http://localhost/demo21/finalsetup/allment/src/assets/pdf/interview-questionss.pdf','filename':'Angular 6 interview' ,'types':'interview' ,'color':'#bd350b','colortext':'white'},

    {'no':'14','File':'http://localhost/demo21/finalsetup/allment/src/assets/pdf/angular-8-tutorial-1.pdf','filename':'Angular 8 interview','types':'Tutorial','color':'green','colortext':'white'},
    {'no':'16','File':'http://localhost/demo21/finalsetup/allment/src/assets/pdf/angular-8-tutorial-3.pdf','filename':'Angular 8 interview','types':'Tutorial','color':'green','colortext':'white'},
    {'no':'17','File':'http://localhost/demo21/finalsetup/allment/src/assets/pdf/angular-8-tutorial-4.pdf','filename':'Angular 8 interview','types':'Tutorial','color':'green','colortext':'white'},
    {'no':'18','File':'http://localhost/demo21/finalsetup/allment/src/assets/pdf/angular-8-tutorial-5.pdf','filename':'Angular 8 interview','types':'Tutorial','color':'green','colortext':'white'},
    {'no':'20','File':'http://localhost/demo21/finalsetup/allment/src/assets/pdf/angular-8-tutorial-6.pdf','filename':'Angular 8 interview','types':'Tutorial','color':'green','colortext':'white'},]
  constructor(public location: Location, private router:Router) { }

  ngOnInit() {
  }

  GoBack() {
      this.router.navigateByUrl('/', {skipLocationChange: true}).then(() =>
      this.router.navigate(['angular/childtoparent']));
  }

  
  showpdffile(value) {
    //alert(value);
    this.pdfflag = false;
    this.pdfSrc12 =value;
  }


}
