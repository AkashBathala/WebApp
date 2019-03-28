import { Component, OnInit } from '@angular/core';
import {Router, Route, ActivatedRoute}from '@angular/router';
import { UserListServiceService } from '../user-list/user-list-service.service';
import { User_List } from '../user-list/User_List';
import { repos } from '../user-list/repos';
import {Pipe,PipeTransform} from'@angular/core';
@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {

  constructor(private router:Router,private route:ActivatedRoute,private service:UserListServiceService) { }

  Button()
  {
    console.log("clicked");
    this.router.navigate(['Userlist']);
  }
  
  private id:number;
  private name:string;
  private ul:User_List;
  private repos:repos[];
  ngOnInit()
  {
    
    // this.route.paramMap.subscribe(p=>{
    //   this.id=+p.get('id');
    //   console.log(this.name+" in ngOninit of userpage Name");
    //    this.service.getName(this.name).subscribe(e=>this.ul=e);
    // });

    this.route.paramMap.subscribe(p=>{
      this.name=p.get('id');
      console.log(this.name+" in ngOninit of userpage Name");
       this.service.getName(this.name).subscribe(e=>this.ul=e);
    });
    
    this.service.getRepos().subscribe(e=>this.repos=e);
    
  }

}
