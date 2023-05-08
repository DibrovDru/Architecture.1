package ru.deta.deta.service;

import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import ru.deta.deta.dto.info.CommentInfoDto;
import ru.deta.deta.entities.Comment;
import ru.deta.deta.entities.Task;
import ru.deta.deta.repository.CommentRepo;

import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

@Slf4j
@Service
@RequiredArgsConstructor
public class CommentService {
    private final TaskService taskService;
    private final CommentRepo commentRepo;
    private final UserService userService;

    @Transactional
    public List<CommentInfoDto> getCommentsByTaskId(Long taskId) {
        return commentRepo.getCommentsByTaskId(taskId)
                .stream()
                .map(CommentInfoDto::new)
                .collect(Collectors.toList());
    }

    @Transactional
    public CommentInfoDto createComment(CommentInfoDto commentInfo, Long taskId) {
        Task task = taskService.getTaskById(taskId);

        if (task == null) {
            log.info("cannot find task with id {} while adding comment", taskId);
            return null;
        }

        Comment comment = new Comment();
        comment.setAuthor(userService.getUser(commentInfo.getAuthor().getId()));
        comment.setText(commentInfo.getText());
        comment.setCreatedAt(new Date());
        comment.setTask(task);
        return new CommentInfoDto(commentRepo.save(comment));
    }

    @Transactional
    public CommentInfoDto updateComment(CommentInfoDto commentInfo, Long commentId, @NonNull Long userId) {
        Comment comment = commentRepo.getReferenceById(commentId);

        if (comment.getId() == null) {
            log.info("cannot find comment with id {} while trying to update", commentId);
            return null;
        }

        if (!userId.equals(comment.getAuthor().getId())) {
            log.info("user with id {} is not author of comment with id {}", userId, commentId);
            return null;
        }

        comment.setText(commentInfo.getText());
        return new CommentInfoDto(commentRepo.save(comment));
    }

    @Transactional
    public void deleteComment(Long commentId, @NonNull Long userId) {
        Comment comment = commentRepo.getReferenceById(commentId);

        if (comment.getId() == null) {
            log.info("cannot find comment with id {} while trying to update", commentId);
            return;
        }

        if (!userId.equals(comment.getAuthor().getId())) {
            log.info("user with id {} is not author of comment with id {}", userId, commentId);
            return;
        }

        commentRepo.delete(comment);
    }
}
