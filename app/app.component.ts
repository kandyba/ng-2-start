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

        <div class="row"></div>
        
            <div class="col-sm-4">
              <div *ngIf="users">
                <ul class="list-group users-list">
                  <li class="list-group-item"
                      *ngFor="let user of users"
                      (click)="selectUser(user)"
                      >
                    {{user.name}} - {{user.username}}
                  </li>
                </ul>
              </div>
            </div>
        
            <div class="col-sm-8">
              <div class="jumbotron">
                <h1>Welcome to Our App!!!</h1>
              </div>
            </div>
        
      </main>
      
      <footer class="text-center">
        Copyright &copy; 2017
      </footer>
    `,
    styles: [`
    .jumbotron { box-shadow: 0 2px 0 rgba(0, 0, 0, 0.2); }
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
