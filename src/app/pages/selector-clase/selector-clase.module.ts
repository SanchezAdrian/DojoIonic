import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectorClasePageRoutingModule } from './selector-clase-routing.module';

import { SelectorClasePage } from './selector-clase.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelectorClasePageRoutingModule
  ],
  declarations: [SelectorClasePage]
})
export class SelectorClasePageModule {}
