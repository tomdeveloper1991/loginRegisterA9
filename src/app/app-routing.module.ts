import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './students/add/add.component';
import { ViewComponent } from './students/view/view.component';


const routes: Routes = [
  {path: '', redirectTo:'', pathMatch:'full'},
  {path: 'add', component:AddComponent},
  {path: 'view', component:ViewComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
