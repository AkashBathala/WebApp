import { Pipe, PipeTransform } from '@angular/core';
import { User_List } from './User_List';

@Pipe({
  name: 'employeeFilterPipe'
})
export class EmployeeFilterPipePipe implements PipeTransform {

  transform(us:User_List[],SearchTerm:String):User_List[] {
    if(!us||!SearchTerm)
    {

      return us;
      
    }
    return us.filter(u=>
      u.login.toLowerCase().indexOf(SearchTerm.toLowerCase())!==-1);
  }
  
  
 
}