import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OktaAuthService } from '@okta/okta-angular';
import { ArtistService } from '../../services/artist.service';
import { Song } from '../../models/song';
import { SongService } from '../../services/song.service';

@Component({
  selector: 'app-artist-songs',
  templateUrl: './artist-songs.component.html',
  styleUrls: ['./artist-songs.component.css']
})
export class ArtistSongsComponent implements OnInit {

  songs: Song[];
  constructor(private route: ActivatedRoute, private songService: SongService, private artistService: ArtistService, private router: Router, public oktaAuth: OktaAuthService) { }

  async ngOnInit() {
    this.getAllSongsByArtist();

    // check if user is authenticated
    this.isAuthenticated = await this.oktaAuth.isAuthenticated();

    this.oktaAuth.$authenticationState.subscribe(
      (isAuthenticated: boolean)  => this.isAuthenticated = isAuthenticated
    );
  }
  
  getAllSongsByArtist() {
    const id = this.route.snapshot.paramMap.get('id');
    this.artistService.getSongsByArtist(id).subscribe(
      data => {
        this.songs = data;
      }
    );
  }

  songLyrics(id: number) {
    this.router.navigate(['song-lyrics', id]);
  }

  private getSongs() {
    this.songService.getSongsList().subscribe(data => {
      this.songs = data;
    })
  }
  deleteSong(id: number) {
    this.songService.deleteSong(id).subscribe(data => {
      this.getSongs();
    })
  }
   // set status
   isAuthenticated: boolean = false;
}
