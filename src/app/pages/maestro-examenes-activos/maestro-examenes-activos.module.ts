import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MaestroExamenesActivosPageRoutingModule } from './maestro-examenes-activos-routing.module';

import { MaestroExamenesActivosPage } from './maestro-examenes-activos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MaestroExamenesActivosPageRoutingModule
  ],
  declarations: [MaestroExamenesActivosPage]
})
export class MaestroExamenesActivosPageModule {}
