package ru.deta.deta.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import ru.deta.deta.entities.Sprint;

@Repository
public interface SprintRepo extends JpaRepository<Sprint, Long> {
}
