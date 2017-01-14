import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

import { Qteam, TeamMember } from '../shared/model/team';
import { DevteamService } from './../../services/dev-team/devteam.service';




@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {

  constructor(private devService: DevteamService) {

    var teams$ : FirebaseListObservable<any> = devService.getTeams();
    
    this.teams = teams$;

    teams$.subscribe(t => {
      console.log(t);
    });
    
   }


  team:Qteam;

  teams: FirebaseListObservable<any>;
    
  ngOnInit() {
  }

}
