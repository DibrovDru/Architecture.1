package ru.deta.deta.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import ru.deta.deta.entities.Comment;

import java.util.List;

@Repository
public interface CommentRepo extends JpaRepository<Comment, Long> {
    @Query(value = "select * from comments where " +
            "task_id = ?1 and deleted = false", nativeQuery = true)
    public List<Comment> getCommentsByTaskId(Long taskId);
}
