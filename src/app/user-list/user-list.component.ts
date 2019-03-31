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

  constructor(private route: Router, private userlist: UserListServiceService) { }



  user: User_List[];
  userli:User_List;
  
  x:number;

  Button() {
    this.route.navigate(['UserPage']);
  }
  
  UserPage(login: string) {

    // console.log(login);
    this.route.navigate(['UserPage', login]);
  }
  Userid(id: number) {
    // console.log(id);
    this.route.navigate(['UserPage', id]);

  }
  search(name:string)
  {
    this.userlist.getName(name).subscribe(e=>this.userli=e);
    

  }

  yhendler() {
     
    var wrap = document.getElementById("yoff");
    var contentheight = wrap.offsetHeight;//gets page content height
    var yoffset = window.pageYOffset;//gets the vertical scroll positio
    var y = yoffset + window.innerHeight;
    if (y >= contentheight) {
      this.x=10;
       
      
    } var status = document.getElementById('status');

    status.innerHTML = contentheight + "|" + y;
  }
  load()
  {
    confirm("load called")
  }
  ngOnInit() {
    
    this.userlist.getlist().subscribe(e => this.user = e);
    window.onscroll = this.yhendler;
    

  }

}