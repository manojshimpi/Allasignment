import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashComponent } from './dashboard/dash/dash.component'
import { ChildtoparenthComponent } from './assignonlycomponent/childtoparenth/childtoparenth.component'

const routes: Routes = [
  {
    path: 'angular',
    component: DashComponent,
    children: [
      {
      path: '',
      children: [
        { path: 'childtoparent', component:ChildtoparenthComponent},
        { path: '', component:DashComponent}
       ],
    }
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class AngularmroutingModule { }
