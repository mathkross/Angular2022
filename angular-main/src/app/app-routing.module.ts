import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JogosComponent } from './views/jogos/jogos.component';
import { PlataformasComponent } from './views/plataformas/plataformas.component';
import { SobreComponent } from './views/sobre/sobre.component';

const routes: Routes = [
  {
    path: 'jogos', 
    component: JogosComponent 
  },
  {
    path: 'plataformas',
    component: PlataformasComponent
  },
  {
    path: 'sobre',
    component: SobreComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
