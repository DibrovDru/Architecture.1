package ru.deta.deta.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import ru.deta.deta.entities.Task;

import java.util.List;

@Repository
public interface TaskRepo extends JpaRepository<Task, Long> {
    @Query(value = "select * from tasks where " +
            "project_id = ?1 and sprint_id = ?2", nativeQuery = true)
    List<Task> getTaskByProjectAndSprint(Long projectId, Long sprintId);

    @Query(value = "select * from tasks where " +
            "project_id = ?1 and sprint_id = ?2 " +
            "and id = ?3", nativeQuery = true)
    Task getTaskByProjectAndSprintAndTaskId(Long projectId, Long sprintId, Long taskId);

    @Query(value = "select * from tasks where " +
            "project_id = ?1 and sprint_id = ?2 ", nativeQuery = true)
    List<Task> getTaskByProjectAndSprintAndTaskId(Long projectId, Long sprintId);
}
