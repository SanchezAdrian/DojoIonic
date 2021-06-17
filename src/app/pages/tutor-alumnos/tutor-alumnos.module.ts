import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TutorAlumnosPageRoutingModule } from './tutor-alumnos-routing.module';

import { TutorAlumnosPage } from './tutor-alumnos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TutorAlumnosPageRoutingModule
  ],
  declarations: [TutorAlumnosPage]
})
export class TutorAlumnosPageModule {}
