import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppLandingComponent } from './components/app-landing/app-landing.component';
import { CapabilitiesModule } from 'ngx-lib-ivy-bug';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/app-landing',
    pathMatch: 'full'
  },
  {
    path: 'app-landing',
    component: AppLandingComponent
  },
  {
    path: 'cap',
    loadChildren: () => CapabilitiesModule
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
