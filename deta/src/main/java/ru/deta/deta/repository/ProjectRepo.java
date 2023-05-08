package ru.deta.deta.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import ru.deta.deta.entities.Project;

@Repository
public interface ProjectRepo extends JpaRepository<Project, Long> {
}
