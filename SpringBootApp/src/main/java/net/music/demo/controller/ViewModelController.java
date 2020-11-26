package net.music.demo.controller;

import net.music.demo.exception.ResourceNotFoundException;
import net.music.demo.model.Artist;
import net.music.demo.model.ViewModel;
import net.music.demo.repository.Artist_Repository;
import net.music.demo.repository.Song_Repository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping("/api/")
public class ViewModelController {

    @Autowired
    private Artist_Repository artistRepository;

    @Autowired
    private Song_Repository songRepository;


    @GetMapping("/songs")
    public ResponseEntity<List<ViewModel>> getAllSongs() {
        List<ViewModel> viewModel = new ArrayList<>();
        songRepository.findAll().forEach(song -> {

            Long id = song.getArtist().getId();

            Artist artist = artistRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Artist Not Found With ID: " + id));

            viewModel.add(new ViewModel(
                    song.getId(),
                    artist.getArtistName(),
                    song.getSongName(),
                    song.getAlbum(),
                    song.getYear()));
        });

        return new ResponseEntity<List<ViewModel>>(viewModel, HttpStatus.ACCEPTED);
    }
}
