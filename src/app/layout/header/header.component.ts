import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

import { DevteamService } from './../../../services/dev-team/devteam.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    constructor(private devService: DevteamService) {

    var teamNames$ : FirebaseListObservable<any> = devService.getTeamNames();
    this.teamNames = teamNames$;
   }

  teamNames: FirebaseListObservable<any>;

  ngOnInit() {
  }

}
