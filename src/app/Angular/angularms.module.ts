import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AngularmroutingModule } from './angularmrouting.module';
import { DashComponent } from './dashboard/dash/dash.component';
import { ChildtoparenthComponent } from './assignonlycomponent/childtoparenth/childtoparenth.component';
import { HeadermenuComponent } from './headermenu/headermenu/headermenu.component'


@NgModule({
  imports: [
    CommonModule,
    AngularmroutingModule],
  declarations: [DashComponent, ChildtoparenthComponent, HeadermenuComponent]
})


export class AngularmsModule { }
