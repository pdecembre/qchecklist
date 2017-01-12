import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DeploymentComponent } from './deployment/deployment.component';

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'deployment', component: DeploymentComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(APP_ROUTES)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}