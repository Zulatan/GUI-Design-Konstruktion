import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'global-nav',
    pathMatch: 'full'
  },
  {
    path: 'tilbud',
    loadChildren: () => import('./tilbud/tilbud.module').then( m => m.TilbudPageModule)
  },
  {
    path: 'indkoeb',
    loadChildren: () => import('./indkoeb/indkoeb.module').then( m => m.IndkoebPageModule)
  },

  {
    path: 'lister',
    loadChildren: () => import('./lister/lister.module').then( m => m.ListerPageModule),
    data: { 'app-nav-compontent': false }, // Add this line

  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
