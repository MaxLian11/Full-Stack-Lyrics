import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArtistDetailsComponent } from './components/artist-details/artist-details.component';
import { ArtistListComponent } from './components/artist-list/artist-list.component';
import { CreateArtistComponent } from './components/create-artist/create-artist.component';
import { UpdateArtistComponent } from './components/update-artist/update-artist.component';
import { SongsListComponent } from './components/songs-list/songs-list.component';
import { SongLyricsComponent } from './components/song-lyrics/song-lyrics.component';
import { CreateSongComponent } from './components/create-song/create-song.component';

const routes: Routes = [
  { path: 'home', component: ArtistListComponent },
  { path: 'create-artist', component: CreateArtistComponent },
  { path: '', redirectTo: 'artists', pathMatch: 'full' },
  { path: 'update-artist/:id', component: UpdateArtistComponent },
  { path: 'artist-details/:id', component: ArtistDetailsComponent },
  { path: 'songs', component: SongsListComponent },
  { path: 'song-lyrics/:id', component: SongLyricsComponent },
  { path: 'create-song', component: CreateSongComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
