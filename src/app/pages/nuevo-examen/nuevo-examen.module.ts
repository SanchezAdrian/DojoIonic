import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NuevoExamenPageRoutingModule } from './nuevo-examen-routing.module';

import { NuevoExamenPage } from './nuevo-examen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NuevoExamenPageRoutingModule
  ],
  declarations: [NuevoExamenPage]
})
export class NuevoExamenPageModule {}
