import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Artist } from '../artist';
import { ArtistService } from '../artist.service';

@Component({
  selector: 'app-update-artist',
  templateUrl: './update-artist.component.html',
  styleUrls: ['./update-artist.component.css']
})
export class UpdateArtistComponent implements OnInit {

  id: number;
  artist: Artist = new Artist();
  constructor(private artistService: ArtistService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.artistService.getArtistById(this.id).subscribe(data => {
      this.artist = data;
    }, error => console.log(error));
  }

  onSubmit() {
    this.artistService.updateArtist(this.id, this.artist).subscribe(data => {
      this.goToArtistList();
    }, error => console.log(error))
  }

  goToArtistList(){
    this.router.navigate(['/artists']);
  }

}
