import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TutorAlumnoPageRoutingModule } from './tutor-alumno-routing.module';

import { TutorAlumnoPage } from './tutor-alumno.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TutorAlumnoPageRoutingModule
  ],
  declarations: [TutorAlumnoPage]
})
export class TutorAlumnoPageModule {}
