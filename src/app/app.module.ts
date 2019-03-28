import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import {Routes, RouterModule} from '@angular/router';
import { UserPageComponent } from './user-page/user-page.component';
import{HttpClientModule} from '@angular/common/http';
import { EmployeeFilterPipePipe } from './user-list/employee-filter-pipe.pipe';
import{ FormsModule} from '@angular/forms';

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
    EmployeeFilterPipePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routerlist)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
