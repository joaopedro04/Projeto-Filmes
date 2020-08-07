import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComponentsRoutes } from './components/components-routing.module'
import { PagesRoutes } from './pages/pages-routing.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'generos/Popular',
    pathMatch: 'full'
  },
  ...ComponentsRoutes,
  ...PagesRoutes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
