import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OktaAuthService } from '@okta/okta-angular';
import { Artist } from '../artist';
import { ArtistService } from '../artist.service';

@Component({
  selector: 'app-artist-list',
  templateUrl: './artist-list.component.html',
  styleUrls: ['./artist-list.component.css']
})
export class ArtistListComponent implements OnInit {

  artists: Artist[];

  constructor(private artistService: ArtistService, private router: Router, public oktaAuth: OktaAuthService) { }

  async ngOnInit() {
    this.getArtists();

    // check if user is authenticated
    this.isAuthenticated = await this.oktaAuth.isAuthenticated();
    this.oktaAuth.$authenticationState.subscribe(
      (isAuthenticated: boolean)  => this.isAuthenticated = isAuthenticated
    );
  }

  private getArtists(){
    this.artistService.getArtistsList().subscribe(data => {
      this.artists = data;
    })
  }

  updateArtist(id: number) {
    this.router.navigate(['update-artist', id]);
  }

  deleteArtist(id: number) {
    this.artistService.deleteArtist(id).subscribe(data => {
      console.log(data);
      this.getArtists();
    })
  }
  
  artistDetails(id: number) {
    this.router.navigate(['artist-details', id]);
  }


  isAuthenticated: boolean = false;



}
