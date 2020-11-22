package net.music.demo.repository;

import net.music.demo.model.Artist;
import net.music.demo.model.Song;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface Song_Repository extends JpaRepository<Song, Long> {
    List<Song> findByArtistId(Long id);
}
