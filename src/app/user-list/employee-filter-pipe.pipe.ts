import { Pipe, PipeTransform } from '@angular/core';
import { User_List } from './User_List';

@Pipe({
  name: 'employeeFilterPipe'
})
export class EmployeeFilterPipePipe implements PipeTransform {

  transform(user:User_List[],SearchTerm:String):User_List[] {
    if(!user||!SearchTerm)
    {
      return user;
    }
    return user.filter(u=>
      u.login.toLowerCase().indexOf(SearchTerm.toLowerCase())!==-1);
  }
 
}