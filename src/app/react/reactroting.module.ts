import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashreactComponent } from './dashreact/dashreact.component';
import { VirtualdomComponent } from './virtualdom/virtualdom.component'; 


const routes : Routes = [
  {
    path:'Reactmaster',
    component:DashreactComponent,
    children:[
      {
        path:'',
        children:[
          {
             path:'reactchildrean',
             component:VirtualdomComponent
          },
          {
            path:'',
            component:DashreactComponent
          }
        ]
      }
    ]
  }
]
@NgModule({

  imports: [RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class ReactrotingModule { }
