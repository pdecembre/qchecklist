import { Component, OnInit } from '@angular/core';
import { Qteam, TeamMember } from '../shared/model/team';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {

  constructor() { }


  team:Qteam; 
  
  
  ngOnInit() {
  }

}
