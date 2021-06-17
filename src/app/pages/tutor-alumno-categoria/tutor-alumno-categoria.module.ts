import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TutorAlumnoCategoriaPageRoutingModule } from './tutor-alumno-categoria-routing.module';

import { TutorAlumnoCategoriaPage } from './tutor-alumno-categoria.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TutorAlumnoCategoriaPageRoutingModule
  ],
  declarations: [TutorAlumnoCategoriaPage]
})
export class TutorAlumnoCategoriaPageModule {}
