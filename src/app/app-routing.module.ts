import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MobilesComponent } from './mobiles/mobiles.component';
import { AddmobilesComponent } from './addmobiles/addmobiles.component';

const routes: Routes = [
  {path:"",component:MobilesComponent},
  {path:"mobile",component:MobilesComponent},
  {path:"add",component:AddmobilesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
