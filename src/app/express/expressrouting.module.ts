import { NgModule } from '@angular/core';
import { Routes , RouterModule } from '@angular/router';
import { DashexpressComponent } from './dashexpress/dashexpress.component';
import { ExpresscreateconnComponent } from './expresscreateconn/expresscreateconn.component';

const routes : Routes = [
  {
    path:'Masterexpress',
    component:DashexpressComponent,
    children:[
    {
      path:'',
      children:[
        { path:'expresschildren' , component:ExpresscreateconnComponent },
        { path:'' , component:DashexpressComponent }
      ]
    }
   ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class ExpressroutingModule { }
