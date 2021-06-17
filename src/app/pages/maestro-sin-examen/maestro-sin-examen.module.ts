import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MaestroSinExamenPageRoutingModule } from './maestro-sin-examen-routing.module';

import { MaestroSinExamenPage } from './maestro-sin-examen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MaestroSinExamenPageRoutingModule
  ],
  declarations: [MaestroSinExamenPage]
})
export class MaestroSinExamenPageModule {}
