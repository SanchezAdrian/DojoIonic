import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NuevoExamenPage } from './nuevo-examen.page';

const routes: Routes = [
  {
    path: '',
    component: NuevoExamenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NuevoExamenPageRoutingModule {}
