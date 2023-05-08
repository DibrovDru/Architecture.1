package ru.deta.deta.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import ru.deta.deta.entities.Project;

import java.util.List;

@Repository
public interface ProjectRepo extends JpaRepository<Project, Long> {
    @Query(value = "select * from projects " +
            "inner join person_projects pp on projects.id = pp.project_id where " +
            "author_id = ?1 or pp.person_id = ?1", nativeQuery = true)
    List<Project> getAllPersonProjects(Long userId);
}
