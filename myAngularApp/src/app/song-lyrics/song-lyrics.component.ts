import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Song } from '../song';
import { SongService } from '../song.service';

@Component({
  selector: 'app-song-lyrics',
  templateUrl: './song-lyrics.component.html',
  styleUrls: ['./song-lyrics.component.css']
})
export class SongLyricsComponent implements OnInit {

  id: number
  song: Song

  constructor(private route: ActivatedRoute, private songService: SongService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.song = new Song();
    this.songService.getSongById(this.id).subscribe( data => {
      this.song = data;
      
    })
  }

}
