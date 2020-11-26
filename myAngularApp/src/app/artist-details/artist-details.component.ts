import { Component, OnInit } from '@angular/core';
import { Artist } from '../artist';
import { ActivatedRoute } from '@angular/router';
import { ArtistService } from '../artist.service';

@Component({
  selector: 'app-artist-details',
  templateUrl: './artist-details.component.html',
  styleUrls: ['./artist-details.component.css']
})
export class ArtistDetailsComponent implements OnInit {

  id: number
  artist: Artist

  constructor(private route: ActivatedRoute, private artistService: ArtistService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.artist = new Artist();
    this.artistService.getArtistById(this.id).subscribe( data => {
      this.artist = data;
      
    })
  }

}
