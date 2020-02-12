import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { AngularmsModule  } from './Angular/angularm/angularms.module';
import { PagnotfoundComponent } from './pagnotfound/pagnotfound.component';



@NgModule({
  declarations: [
    AppComponent,
    PagnotfoundComponent,
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
