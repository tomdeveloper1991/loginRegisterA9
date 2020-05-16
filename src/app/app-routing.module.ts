import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './students/add/add.component';
import { ViewComponent } from './students/view/view.component';
import { EditComponent } from './students/edit/edit.component';


const routes: Routes = [
  {path: '', redirectTo:'', pathMatch:'full'},
  {path: 'add', component:AddComponent},
  {path: 'view', component:ViewComponent},
  {path: 'edit/:id', component:EditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
