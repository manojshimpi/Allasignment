import { NgModule } from '@angular/core';
import { Routes , RouterModule } from '@angular/router';
import { DashnodeComponent } from './dashnode/dashnode.component';
import { CreateconnectionComponent } from './createconnection/createconnection.component';

const routes: Routes = [
  {
    path: 'Nodemenu',
    component: DashnodeComponent,
    children: [
      {
      path: '',
      children: [
        { path: 'CreateConnect', component:CreateconnectionComponent},
        { path: '', component:DashnodeComponent}
       ],
    }
  ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class NoderoutingModule { }
