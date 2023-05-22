package ru.deta.deta.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import ru.deta.deta.entities.Sprint;

import java.util.List;

@Repository
public interface SprintRepo extends JpaRepository<Sprint, Long> {
    List<Sprint> getSprintsByProjectIdOrderByNumberDesc(Long projectId);
    Sprint getSprintByIdAndProjectId(Long sprintId, Long projectId);
}
