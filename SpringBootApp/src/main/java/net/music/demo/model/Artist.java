package net.music.demo.model;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "artists")
public class Artist {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "artist_name", columnDefinition = "VARCHAR(50)")
    private String artistName;
    @Column(name = "country", columnDefinition = "VARCHAR(50)")
    private String country;
    @Column(name = "genre", columnDefinition = "VARCHAR(50)")
    private String genre;

    @OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL, mappedBy = "artist")
    private List<Song> songs;


    public Artist() {
    }

    public Artist(String artistName, String country, String genre) {
        this.artistName = artistName;
        this.country = country;
        this.genre = genre;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }


    public String getArtistName() {
        return artistName;
    }

    public void setArtistName(String artistName) {
        this.artistName = artistName;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public String getGenre() {
        return genre;
    }

    public void setGenre(String genre) {
        this.genre = genre;
    }
}