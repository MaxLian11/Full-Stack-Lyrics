package net.music.demo.model;

import javax.persistence.*;

@Entity
@Table(name = "songs")
public class Song {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;


    @ManyToOne
    @JoinColumn(name = "artist", nullable = false)
    private Artist artist;

    @Column(name = "song_name", columnDefinition = "VARCHAR(50)")
    private String songName;
    @Column(name = "album", columnDefinition = "VARCHAR(50)")
    private String album;
    @Column(name = "lyrics", columnDefinition = "TEXT")
    private String lyrics;
    @Column(name = "year", columnDefinition = "INT(4)")
    private int year;

    public Song() {
    }

    public Song(String songName, String album, String lyrics, int year) {

        this.songName = songName;

        this.album = album;

        this.lyrics = lyrics;

        this.year = year;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Artist getArtist() {
        return artist;
    }

    public void setArtist(Artist artist) {
        this.artist = artist;
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

    public String getLyrics() {
        return lyrics;
    }

    public void setLyrics(String lyrics) {
        this.lyrics = lyrics;
    }

    public int getYear() {
        return year;
    }

    public void setYear(int year) {
        this.year = year;
    }
}