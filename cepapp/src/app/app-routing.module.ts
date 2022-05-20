import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExercicioLocationComponent } from './view/exercicio-location/exercicio-location.component';
const routes: Routes =[
  { path: 'location', component: ExercicioLocationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
