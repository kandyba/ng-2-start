import {Component} from '@angular/core';
import {User} from "./shared/models/user"

@Component({
    selector: 'my-app',
    templateUrl: "./app/app.component.html",
    styleUrls: ['./app/app.component.css']
})


export class AppComponent {
    users: User[] = [
        {id: 18, name: "Ros", username: "geler"},
        {id: 19, name: "Fibi", username: "fibi_bufe"},
        {id: 20, name: "Jo", username: "johan"}
    ];
    activeUser: User;

    selectUser(user) {
        this.activeUser = user;
        console.log(this.activeUser);
    }
}
