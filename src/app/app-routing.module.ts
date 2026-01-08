import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ProducerDetailsPage } from './producer-details/producer-details.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'producer-details',
    pathMatch: 'full'
  },
  {
    path: 'producer-details',
    component: ProducerDetailsPage
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

