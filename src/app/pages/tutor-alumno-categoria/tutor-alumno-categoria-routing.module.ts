import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TutorAlumnoCategoriaPage } from './tutor-alumno-categoria.page';

const routes: Routes = [
  {
    path: '',
    component: TutorAlumnoCategoriaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TutorAlumnoCategoriaPageRoutingModule {}
