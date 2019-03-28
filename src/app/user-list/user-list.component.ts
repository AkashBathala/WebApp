import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserListServiceService } from './user-list-service.service';
import { User_List } from './User_List';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor(private route:Router, private userlist:UserListServiceService) { }

  

  user:User_List[];
  us:User_List;
  SearchTerm:string="" ;
  ngOnInit() {
   this.userlist.getlist().subscribe(e=>this.user=e);
  }
  
  Button()
  {
    this.route.navigate(['UserPage']);
  }
  
  UserPage(login:string)
  {
    
   console.log(login);
   this.route.navigate(['UserPage',login]); 
  }
  Userid(id:number)
  {
    console.log(id);
    this.route.navigate(['UserPage',id]);
  }
     

}
