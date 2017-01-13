import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Qteam, TeamMember } from '../app/shared/model/team';

@Injectable()
export class FirebaseService {


  getTeams(){

  }

  getTeam(name:string){

  }

  addTeam(team:Qteam){

  }

  constructor(private _http:Http) { }

}
