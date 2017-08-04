import {Component} from "@angular/core";
import {User} from "../shared/models/user";

@Component({
    selector: 'user-form',
    styles: [`
      form{
        padding: 10px;
        background: #e6e6e6;
        border-radius: 3px;
      }
      .btn-primary{
        border-radius: 3px;
      }
    `],
    templateUrl: './app/users/user-form.component.html'
})

export class UserFormComponent{

}