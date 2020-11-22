package net.music.demo.controller;

import net.music.demo.exception.ResourceNotFoundException;
import net.music.demo.model.Artist;
import net.music.demo.model.Song;
import net.music.demo.repository.Song_Repository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:4200")
@RequestMapping("/api/")
public class SongController {

    @Autowired
    private Song_Repository songRepository;
    private ResponseEntity<Object> ReponseEntity;

    // get all songs
    @GetMapping("/songs")
    public List<Song> getAllSongs() {
        return songRepository.findAll();
    }

    // post new song
    @PostMapping("/songs")
    public Song createArtist(@RequestBody Song song) {
        return songRepository.save(song);
    }

    // get song details
    @GetMapping("/songs/{id}")
    public ResponseEntity<Song> getSongById(@PathVariable Long id) {
        Song song = songRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Song Not Found With ID: " + id));
        return ResponseEntity.ok(song);
    }

    // get song by artist id
    @GetMapping("/artists/{id}/songs")
    public List<Song> getAllSongsByArtistId(@PathVariable Long id) {
        return songRepository.findByArtistId(id);
    }

}
