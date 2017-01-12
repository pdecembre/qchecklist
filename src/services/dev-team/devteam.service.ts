
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/observable';
import { AngularFire, FirebaseListObservable } from 'angularfire2';


@Injectable()
export class DevteamService {

  teams: FirebaseListObservable<any[]>;

  constructor(af: AngularFire) {
    this.teams = af.database.list('/devteams');
   }

}
