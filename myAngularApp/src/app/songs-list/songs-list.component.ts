import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OktaAuthService } from '@okta/okta-angular';
import { Song } from '../song';
import { SongService } from '../song.service';

@Component({
  selector: 'app-songs-list',
  templateUrl: './songs-list.component.html',
  styleUrls: ['./songs-list.component.css']
})
export class SongsListComponent implements OnInit {

  songs: Song[];


  constructor(private songService: SongService, private router: Router, public oktaAuth: OktaAuthService) { }

  async ngOnInit() {
    this.getSongs();

    // check if user is authenticated
    this.isAuthenticated = await this.oktaAuth.isAuthenticated();

    this.oktaAuth.$authenticationState.subscribe(
      (isAuthenticated: boolean)  => this.isAuthenticated = isAuthenticated
    );
  }

  private getSongs() {
    this.songService.getSongsList().subscribe(data => {
      this.songs = data;
    })
  }

  songLyrics(id: number) {
    this.router.navigate(['song-lyrics', id]);
  }

  deleteSong(id: number) {
    this.songService.deleteSong(id).subscribe(data => {
      console.log(data);
      this.getSongs();
    })
  }
  // set status
  isAuthenticated: boolean = false;
}
