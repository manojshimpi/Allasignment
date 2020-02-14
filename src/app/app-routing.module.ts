import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagnotfoundComponent } from './pagnotfound/pagnotfound.component'
import { AppComponent } from './app.component';




const routes: Routes = [
  {path: '', redirectTo: '/angular', pathMatch: 'full'},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
