import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MaestroSinExamenPage } from './maestro-sin-examen.page';

const routes: Routes = [
  {
    path: '',
    component: MaestroSinExamenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MaestroSinExamenPageRoutingModule {}
