import {Component} from '@angular/core';

@Component({
    selector: 'my-app',
    template: `        
      <header>
        <nav class="navbar navbar-inverse">
          <div class="navbar-header">
            <a href="/" class="navbar-brand">
              My Angular 2 App
           </a>
          </div>
        </nav>
      </header>

      <main>

        <div class="row">
          <div class="col-sm-4">
            <div *ngIf="users">
              <ul class="list-group users-list">
                <li class="list-group-item"
                    *ngFor="let user of users"
                    (click)="selectUser(user)"
                    [class.active]="user === activeUser"
                >
                  {{user.name}} - {{user.username}}
                </li>
              </ul>
            </div>
          </div>
          <div class="col-sm-8">
            <div class="jumbotron" *ngIf="activeUser">
              <h2>{{activeUser.name}} <small>{{activeUser.username}}</small></h2>
            </div>
            <div class="jumbotron" *ngIf="!activeUser">
              <span class="glyphicon glyphicon-hand-left"></span>
              <h2>Choose a User</h2>
            </div>
          </div>
        </div>
        
      </main>
      
      <footer class="text-center">
        Copyright &copy; 2017
      </footer>
    `,
    styles: [`
    .users-list li{
      cursor:pointer;
    }
    .jumbotron .glyphicon{
      font-size: 80px;
    }
  `]
})


export class AppComponent {
    users = [
        {name: "Ros", age: 23, username: "geler"},
        {name: "Fibi", age: 19, username: "fibi_bufe"},
        {name: "Jo", age: 23, username: "johan"}
    ];
    activeUser;

    selectUser(user) {
        this.activeUser = user;
        console.log(this.activeUser);
    }
}
