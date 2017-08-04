import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {AppComponent} from "./app.component";
import {userProfileComponent} from "./users/user.profile.component"

@NgModule({
    imports: [
        BrowserModule,
        FormsModule
    ],
    declarations: [
        AppComponent,
        userProfileComponent
    ],
    bootstrap: [AppComponent]
})

export class AppModule {}
