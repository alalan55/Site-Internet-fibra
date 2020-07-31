import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = 
[
  {
    path: 'Home',
    pathMatch: 'full',
    redirectTo: ''
  },
  {
    path: '',
    loadChildren: ()=> import('src/app/components/components.module').then(m=>m.ComponentsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
