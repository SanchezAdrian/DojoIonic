import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MaestroExamenesActivosPage } from './maestro-examenes-activos.page';

const routes: Routes = [
  {
    path: '',
    component: MaestroExamenesActivosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MaestroExamenesActivosPageRoutingModule {}
