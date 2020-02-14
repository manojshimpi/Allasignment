import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashnodeComponent } from './dashnode/dashnode.component';
import { HeadernodemenuComponent } from './headernodemenu/headernodemenu.component';
import { NoderoutingModule } from './noderouting.module';
import { CreateconnectionComponent } from './createconnection/createconnection.component';



@NgModule({
  imports: [
    CommonModule,
    NoderoutingModule
  ],
  declarations: [DashnodeComponent, HeadernodemenuComponent, CreateconnectionComponent],
})
export class NodesModule { }
