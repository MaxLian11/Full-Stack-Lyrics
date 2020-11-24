import { Component, OnInit } from '@angular/core';
import { Song } from '../song';
import { SongService } from '../song.service';
import { Router } from '@angular/router';
import { Artist } from '../artist';
import { ArtistService } from '../artist.service';
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
    
      console.log(data);
      console.log(this.song);
      this.goToSongList();
    },
    error => console.log(error));
  }

  goToSongList(){
    this.router.navigate(['/songs']);
  }
  
  onSubmit(){
    console.log(this.song);
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
