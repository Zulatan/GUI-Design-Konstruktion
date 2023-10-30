import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TilbudPage } from './tilbud.page';

const routes: Routes = [
  {
    path: '',
    component: TilbudPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TilbudPageRoutingModule {}
