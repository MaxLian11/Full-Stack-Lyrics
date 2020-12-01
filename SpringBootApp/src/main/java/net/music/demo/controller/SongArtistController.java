package net.music.demo.controller;

import net.music.demo.model.Artist;
import net.music.demo.model.SongArtist;
import net.music.demo.repository.Artist_Repository;
import net.music.demo.repository.Song_Repository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping("/api/")
public class SongArtistController {

    @Autowired
    private Artist_Repository artistRepository;

    @Autowired
    private Song_Repository songRepository;

    @GetMapping("/songs")
    public ResponseEntity<List<SongArtist>> getAllSongs() {
        List<SongArtist> viewModel = new ArrayList<>();
        songRepository.findAll().forEach(song -> {

            // returns an object "artist" with all fields
            Artist artist = song.getArtist();

            viewModel.add(new SongArtist(
                    song.getId(),
                    artist.getArtistName(),  // returns a single field "artistName"
                    song.getSongName(),
                    song.getAlbum(),
                    song.getYear()));
        });

        return new ResponseEntity<List<SongArtist>>(viewModel, HttpStatus.ACCEPTED);
    }
}
