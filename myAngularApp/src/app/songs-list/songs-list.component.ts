import { Component, OnInit } from '@angular/core';
import { Artist } from '../artist';
import { Song } from '../song';
import { SongService } from '../song.service';

@Component({
  selector: 'app-songs-list',
  templateUrl: './songs-list.component.html',
  styleUrls: ['./songs-list.component.css']
})
export class SongsListComponent implements OnInit {

  songs: Song[];


  constructor(private songService: SongService) { }

  ngOnInit(): void {
    this.getSongs();
  }

  private getSongs() {
    this.songService.getSongsList().subscribe(data => {
      this.songs = data;
    })
  }
}
