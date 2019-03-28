import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import {Routes, RouterModule} from '@angular/router';
import { UserPageComponent } from './user-page/user-page.component';
import{HttpClientModule} from '@angular/common/http';
  
const routerlist:Routes=
[
    {path:'Userlist', component:UserListComponent},
    {path:'UserPage',component:UserPageComponent},
    {path:'UserPage/:id',component:UserPageComponent},
    {path:'',pathMatch:'full',redirectTo:'Userlist'}
    
]

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routerlist)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
