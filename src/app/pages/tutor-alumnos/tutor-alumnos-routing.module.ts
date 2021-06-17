import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TutorAlumnosPage } from './tutor-alumnos.page';

const routes: Routes = [
  {
    path: '',
    component: TutorAlumnosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TutorAlumnosPageRoutingModule {}
