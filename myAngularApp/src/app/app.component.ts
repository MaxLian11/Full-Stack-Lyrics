import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OktaAuthService } from '@okta/okta-angular';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  firstName: string;
  lastName: string;
  userName: string;
  zoneInfo: string;
  title = 'angular-app';
  
  isAuthenticated: boolean;

  // reroute to home page
  constructor(public oktaAuth: OktaAuthService, private router: Router) {  }
  
  async ngOnInit() {

    this.isAuthenticated = await this.oktaAuth.isAuthenticated();
    this.oktaAuth.$authenticationState.subscribe(
      (isAuthenticated: boolean)  => this.isAuthenticated = isAuthenticated

    );
    
    // returns an object with user's claims
    const userClaims = await this.oktaAuth.getUser();
    // becayse of two "await" browser will show an error until the page is reloaded after slicked on "show user info"
    this.userName = userClaims.preferred_username;
    this.lastName = userClaims.family_name;
    this.firstName = userClaims.given_name;
    this.zoneInfo = userClaims.zoneinfo;


  }
}
