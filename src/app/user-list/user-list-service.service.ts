import { Injectable } from '@angular/core';
import { User_List } from './User_List';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IfStmt } from '@angular/compiler';
import { repos } from './repos';

@Injectable({
  providedIn: 'root'
})
export class UserListServiceService {

  private userlist: User_List[] = [];
  private baseurl: string = "https://api.github.com/users";

  constructor(private httpclient: HttpClient) { }
  getlist(): Observable<User_List[]> //get data for Userlist 
  {
    return this.httpclient.get<User_List[]>(" https://api.github.com/users");
  }

  
  getList(id: number): Observable<User_List>//get data for home page by id
  {
    // console.log(id + ' In Id Service');
    return this.httpclient.get<User_List>(`https://api.github.com/users/${id}`);

  }
  log: String;
  getName(login: String): Observable<User_List> {
    this.log = login;
    return this.httpclient.get<User_List>(`https://api.github.com/users/${login}`);
  }
  getNamearrya(): Observable<User_List[]> {
    return this.httpclient.get<User_List[]>(`https://api.github.com/users`);
  }
  getRepos(): Observable<repos[]> {
    return this.httpclient.get<repos[]>(`https://api.github.com/users/${this.log}/repos`);
  }


}
