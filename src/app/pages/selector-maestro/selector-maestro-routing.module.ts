import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectorMaestroPage } from './selector-maestro.page';

const routes: Routes = [
  {
    path: '',
    component: SelectorMaestroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectorMaestroPageRoutingModule {}
