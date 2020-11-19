import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Artist } from './artist';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {

  private baseURL = "http://localhost:8080/api/artists";

  constructor(private httpClient: HttpClient) { }
  
  getArtistsList(): Observable<Artist[]>{
    return this.httpClient.get<Artist[]>(`${this.baseURL}`);
  }

  createArtist(artist: Artist): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, artist);
  }

  getArtistById(id: number): Observable<Artist> {
    return this.httpClient.get<Artist>(`${this.baseURL}/${id}`);
  }

  updateArtist(id: number, artist: Artist): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/${id}`, artist);
  }

  deleteArtist(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}