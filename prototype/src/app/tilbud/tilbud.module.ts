import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TilbudPageRoutingModule } from './tilbud-routing.module';

import { TilbudPage } from './tilbud.page';

//kalder swiper//
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
//kalder swiper//

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TilbudPageRoutingModule
  ],
  declarations: [TilbudPage],

schemas: [CUSTOM_ELEMENTS_SCHEMA],

})
export class TilbudPageModule {}
