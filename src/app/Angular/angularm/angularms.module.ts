import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularmComponent } from '../angularm/angularm.component';
import { ComponentchildComponent } from '../componentchild/componentchild.component';
import { AngularmroutingModule } from './angularmrouting.module';

@NgModule({
  imports: [
    CommonModule,
    AngularmroutingModule,
    
  ],
  declarations: [
    AngularmComponent,
    ComponentchildComponent,
    
  ]
})


export class AngularmsModule { }
