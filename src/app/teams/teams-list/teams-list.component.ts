import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

import { Qteam, TeamMember } from '../../shared/model/team';
import { DevteamService } from './../../../services/dev-team/devteam.service';



@Component({
  selector: 'app-teams-list',
  templateUrl: './teams-list.component.html',
  styleUrls: ['./teams-list.component.css']
})
export class TeamsListComponent implements OnInit {
  constructor(private devService: DevteamService) {

    var teams$ : FirebaseListObservable<any> = devService.getTeams();
    this.teams = teams$;
    
   }


  team:Qteam;

  teams: FirebaseListObservable<any>;
    
  ngOnInit() {
  }
}
