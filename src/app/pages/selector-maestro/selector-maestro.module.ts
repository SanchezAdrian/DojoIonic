import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectorMaestroPageRoutingModule } from './selector-maestro-routing.module';

import { SelectorMaestroPage } from './selector-maestro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelectorMaestroPageRoutingModule
  ],
  declarations: [SelectorMaestroPage]
})
export class SelectorMaestroPageModule {}
 