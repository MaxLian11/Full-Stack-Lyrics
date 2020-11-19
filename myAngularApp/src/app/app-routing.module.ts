import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArtistDetailsComponent } from './artist-details/artist-details.component';
import { ArtistListComponent } from './artist-list/artist-list.component';
import { CreateArtistComponent } from './create-artist/create-artist.component';
import { UpdateArtistComponent } from './update-artist/update-artist.component';

const routes: Routes = [
  { path: 'artists', component: ArtistListComponent },
  { path: 'create-artist', component: CreateArtistComponent },
  { path: '', redirectTo: 'artists', pathMatch: 'full' },
  { path: 'update-artist/:id', component: UpdateArtistComponent },
  { path: 'artist-details/:id', component: ArtistDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
