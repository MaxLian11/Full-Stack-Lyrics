import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Song } from './song';

@Injectable({
  providedIn: 'root'
})
export class SongService {

  private baseURL = "http://localhost:8080/api/songs";

  constructor(private httpClient: HttpClient) { }

  getSongsList(): Observable<Song[]>{
    return this.httpClient.get<Song[]>(`${this.baseURL}`);
  }

  getSongById(id: number): Observable<Song> {
    return this.httpClient.get<Song>(`${this.baseURL}/${id}`);
  }

  createSong(song: Song): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, song);
  }

  deleteSong(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
