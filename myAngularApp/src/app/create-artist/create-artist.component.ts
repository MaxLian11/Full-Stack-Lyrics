import { Component, OnInit } from '@angular/core';
import { Artist } from '../artist';
import { ArtistService } from '../artist.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-artist',
  templateUrl: './create-artist.component.html',
  styleUrls: ['./create-artist.component.css']
})
export class CreateArtistComponent implements OnInit {

  artist: Artist = new Artist();
  constructor(private artistService: ArtistService,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveArtist(){
    
    this.artist.id = null;
    this.artistService.createArtist(this.artist).subscribe( data =>{
      console.log(data);
      this.goToArtistList();
    },
    error => console.log(error));
  }

  goToArtistList(){
    this.router.navigate(['/artists']);
  }
  
  onSubmit(){
    console.log(this.artist);
    this.saveArtist();
  }
}