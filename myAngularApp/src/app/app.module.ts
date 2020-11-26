import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArtistListComponent } from './components/artist-list/artist-list.component';
import { CreateArtistComponent } from './components/create-artist/create-artist.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateArtistComponent } from './components/update-artist/update-artist.component';
import { ArtistDetailsComponent } from './components/artist-details/artist-details.component';
import { AuthRoutingModule } from './auth-routing.module';
import { SongsListComponent } from './components/songs-list/songs-list.component';
import { ArtistSongsComponent } from './components/artist-songs/artist-songs.component';
import { SongLyricsComponent } from './components/song-lyrics/song-lyrics.component';
import { CreateSongComponent } from './components/create-song/create-song.component';

@NgModule({
  declarations: [
    AppComponent,
    ArtistListComponent,
    CreateArtistComponent,
    UpdateArtistComponent,
    ArtistDetailsComponent,
    SongsListComponent,
    ArtistSongsComponent,
    SongLyricsComponent,
    CreateSongComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AuthRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
