package ru.deta.deta.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import ru.deta.deta.entities.Comment;

@Repository
public interface CommentRepo extends JpaRepository<Comment, Long> {
}
