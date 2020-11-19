import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArtistListComponent } from './artist-list/artist-list.component';
import { CreateArtistComponent } from './create-artist/create-artist.component';
import { FormsModule } from '@angular/forms';
import { UpdateArtistComponent } from './update-artist/update-artist.component';
import { ArtistDetailsComponent } from './artist-details/artist-details.component';
import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    ArtistListComponent,
    CreateArtistComponent,
    UpdateArtistComponent,
    ArtistDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AuthRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
