import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactrotingModule } from './reactroting.module';
import { DashreactComponent } from './dashreact/dashreact.component';
import { ReactmenuComponent } from './reactmenu/reactmenu.component';
import { VirtualdomComponent } from './virtualdom/virtualdom.component'; 

@NgModule({
  imports: [
    CommonModule,
    ReactrotingModule
  ],
  declarations: [DashreactComponent, ReactmenuComponent, VirtualdomComponent]
})
export class RecatModule { }
