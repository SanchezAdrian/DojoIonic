import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectorClasePage } from './selector-clase.page';

const routes: Routes = [
  {
    path: '',
    component: SelectorClasePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectorClasePageRoutingModule {}
