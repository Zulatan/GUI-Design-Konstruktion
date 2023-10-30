import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndkoebPage } from './indkoeb.page';

const routes: Routes = [
  {
    path: '',
    component: IndkoebPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndkoebPageRoutingModule {}
