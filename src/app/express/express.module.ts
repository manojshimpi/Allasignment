import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashexpressComponent } from './dashexpress/dashexpress.component';
import { ExpressheadermenuComponent } from './expressheadermenu/expressheadermenu.component';
import { ExpresscreateconnComponent } from './expresscreateconn/expresscreateconn.component';
import { ExpressroutingModule } from './expressrouting.module';



@NgModule({
  imports: [
    CommonModule,
    ExpressroutingModule
  ],
  declarations: [DashexpressComponent, ExpressheadermenuComponent, ExpresscreateconnComponent],
})
export class ExpressModule { }
