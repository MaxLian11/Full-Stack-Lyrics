
import { Artist } from './artist';

export class Song {
    id: number;
    artist: Artist;
    songName: string;
    album: string;
    lyrics: string;
    year: number;
    art_id: number;
}
