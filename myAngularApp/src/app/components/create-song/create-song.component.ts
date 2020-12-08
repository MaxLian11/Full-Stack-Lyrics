import { Component, OnInit } from '@angular/core';
import { Song } from '../../models/song';
import { SongService } from '../../services/song.service';
import { Router } from '@angular/router';
import { Artist } from '../../models/artist';
import { ArtistService } from '../../services/artist.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-song',
  templateUrl: './create-song.component.html',
  styleUrls: ['./create-song.component.css']
})
export class CreateSongComponent implements OnInit {

  song: Song = new Song();
  artists: Artist[];
  
  createSongForm: FormGroup;

  constructor(private songService: SongService, private artistService: ArtistService, private formBuilder: FormBuilder,
    private router: Router) { }

    
  get artist() {
    return this.createSongForm.get('artist');
  }

  ngOnInit(): void {
    this.getAllArtists();

    this.createSongForm = this.formBuilder.group({
      artist: ['', [Validators.required]]
    });
  }

  saveSong(){
    
    this.song.artist = this.artist.value;

    this.songService.createSong(this.song).subscribe( data =>{
      this.goToSongList();
    },
    error => console.log(error));
  }

  goToSongList(){
    this.router.navigate(['/songs']);
  }
  
  onSubmit(){
    this.saveSong();
  }

  getAllArtists() {
    this.artistService.getArtistsList().subscribe(
      data => {
        this.artists = data;
      }
    );
  }
}
