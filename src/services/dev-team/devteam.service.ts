
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/observable';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

import  * as _  from 'lodash';

import { Qteam, TeamMember } from './../../app/shared/model/team';


@Injectable()
export class DevteamService {


  getTeams(): FirebaseListObservable<any> {
    let teams$: FirebaseListObservable<any> = this.af.database.list('teams');
    return teams$;
  }


  getTeamNames(): FirebaseListObservable<any> {
    let teamNames$: FirebaseListObservable<any> = this.af.database.list('team-names');
    return teamNames$;
  }

  getTeam(name: string) {

  }

  addTeam(team: Qteam) {

  }

  constructor(private af: AngularFire) {
  }

}
