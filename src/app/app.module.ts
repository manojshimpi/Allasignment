import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularmsModule  } from './Angular/angularms.module';
import { NodesModule } from './node/nodes.module';
import { ExpressModule } from './express/express.module';
import { RecatModule } from './react/recat.module'
import { PagnotfoundComponent } from './pagnotfound/pagnotfound.component';
import { HeaderComponent } from './header/header.component';




@NgModule({
  declarations: [
    AppComponent,
    PagnotfoundComponent,
    HeaderComponent,
    
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularmsModule,
    NodesModule,
    ExpressModule,
    RecatModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
