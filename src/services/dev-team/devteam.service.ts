
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/observable';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

import { Qteam, TeamMember } from './../../app/shared/model/team';


@Injectable()
export class DevteamService {

  teams: FirebaseListObservable<Qteam[]>;



  getTeams(){
    this.teams = this.af.database.list('/teams');
  }

  getTeam(name:string){

  }

  addTeam(team:Qteam){

  }

  constructor(private af: AngularFire) {
    
   }

}
