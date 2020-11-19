package net.music.demo.repository;

import net.music.demo.model.Artist;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface Artist_Repository extends JpaRepository<Artist, Long> {
}
