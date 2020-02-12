import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagnotfoundComponent } from './pagnotfound/pagnotfound.component'

const routes: Routes = [
  {path: '', redirectTo: '', pathMatch: 'full'},
  {path: '**', component: PagnotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
