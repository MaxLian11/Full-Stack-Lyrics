import { Component, OnInit } from '@angular/core';
import { OktaAuthService } from '@okta/okta-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  userName: string;
  title = 'angular-app';
  isAuthenticated: boolean = false;

  constructor(public oktaAuth: OktaAuthService) {
  }

  async ngOnInit() {
    // returns an object with user's claims
    const userClaims = await this.oktaAuth.getUser();

    // user name is exposed directly as property
    this.userName = userClaims.name;

    this.isAuthenticated = await this.oktaAuth.isAuthenticated();
    this.oktaAuth.$authenticationState.subscribe(
      (isAuthenticated: boolean)  => this.isAuthenticated = isAuthenticated
    );
  }
}
