import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { DEPLOY_CHECKLIST_FIREBASE_CONFIG } from '../services/firebase-configs/deploy-cheklist.firebase.config';
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { QuantumComponent } from './dataplan/quantum/quantum.component';
import { HomeComponent } from './home/home.component';
import { DeploymentComponent } from './deployment/deployment.component';
import { TeamsComponent } from './teams/teams.component';
import { DevteamService } from '../services/dev-team/devteam.service';
import { TeamsListComponent } from './teams/teams-list/teams-list.component';
import { TeamDetailComponent } from './teams/team-detail/team-detail.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    QuantumComponent,
    HomeComponent,
    DeploymentComponent,
    TeamsComponent,
    TeamsListComponent,
    TeamDetailComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    MaterialModule.forRoot(),
    AngularFireModule.initializeApp(DEPLOY_CHECKLIST_FIREBASE_CONFIG)
  ],
  providers: [DevteamService],
  bootstrap: [AppComponent]
})
export class AppModule { }
