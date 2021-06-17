import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TutorAlumnoExamenPage } from './tutor-alumno-examen.page';

const routes: Routes = [
  {
    path: '',
    component: TutorAlumnoExamenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TutorAlumnoExamenPageRoutingModule {}
