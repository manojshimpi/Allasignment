import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AngularmComponent } from '../angularm/angularm.component';
import { ComponentchildComponent } from '../componentchild/componentchild.component';

const routes: Routes = [
  {
    path: 'admin',
    component: AngularmComponent,
    children: [
      {
      path: '',
      children: [
        { path: 'child', component: ComponentchildComponent },
       ],
    }
  ]
  }
];

@NgModule({
  declarations: [AngularmComponent,ComponentchildComponent],
  imports: [RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class AngularmroutingModule { }
