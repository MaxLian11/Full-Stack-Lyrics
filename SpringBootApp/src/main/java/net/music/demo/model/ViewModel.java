package net.music.demo.model;


public class ViewModel {

    private Long song_id;
    private String artistName;
    private String songName;
    private String album;
    private int year;

    public ViewModel(Long song_id, String artistName, String songName, String album, int year) {
        this.song_id = song_id;
        this.artistName = artistName;
        this.songName = songName;
        this.album = album;
        this.year = year;

    }

    public Long getSong_id() {
        return song_id;
    }

    public void setSong_id(Long song_id) {
        this.song_id = song_id;
    }

    public String getArtistName() {
        return artistName;
    }

    public void setArtistName(String artistName) {
        this.artistName = artistName;
    }

    public String getSongName() {
        return songName;
    }

    public void setSongName(String songName) {
        this.songName = songName;
    }

    public String getAlbum() {
        return album;
    }

    public void setAlbum(String album) {
        this.album = album;
    }

    public int getYear() {
        return year;
    }

    public void setYear(int year) {
        this.year = year;
    }
}
