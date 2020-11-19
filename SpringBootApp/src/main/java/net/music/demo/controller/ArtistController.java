package net.music.demo.controller;

import net.music.demo.exception.ResourceNotFoundException;
import net.music.demo.model.Artist;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import net.music.demo.repository.Artist_Repository;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin("http://localhost:4200")
@RequestMapping("/api/")
public class ArtistController {


    @Autowired
    private Artist_Repository artistRepository;
    private ResponseEntity<Object> ReponseEntity;

    @GetMapping("/artists")
    public List<Artist> getAllArtists() {
        return artistRepository.findAll();
    }

    @PostMapping("/artists")
    public Artist createArtist(@RequestBody Artist artist) {
        return artistRepository.save(artist);
    }

    @GetMapping("/artists/{id}")
    public ResponseEntity<Artist> getArtistById(@PathVariable Long id) {
        Artist artist = artistRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Artist Not Found With ID: " + id));
        return ResponseEntity.ok(artist);
    }

    @PutMapping("/artists/{id}")
    public ResponseEntity<Artist> updateArtist(@PathVariable Long id, @RequestBody Artist artistDetails) {
        Artist artist = artistRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Artist Not Found With ID: " + id));
        artist.setName(artistDetails.getName());
        Artist updatedArtist = artistRepository.save(artist);
        return ResponseEntity.ok(updatedArtist);
    }

    @DeleteMapping("/artists/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteArtist(@PathVariable Long id) {
        Artist artist = artistRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Artist Not Found With ID: " + id));
        artistRepository.delete(artist);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);

    }
}
