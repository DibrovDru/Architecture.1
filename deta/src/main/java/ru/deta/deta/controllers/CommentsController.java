package ru.deta.deta.controllers;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import ru.deta.deta.dto.UserDto;
import ru.deta.deta.dto.info.CommentInfoDto;
import ru.deta.deta.service.CommentService;
import ru.deta.deta.service.ProjectService;
import ru.deta.deta.service.UserService;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class CommentsController {
    private final UserService userService;
    private final CommentService commentService;
    private final ProjectService projectService;

    @GetMapping("/projects/{projectId}/tasks/sprints/{sprintId}/{taskId}/comments")
    public List<CommentInfoDto> getTaskComments(@PathVariable Long projectId,
                                                @PathVariable Long sprintId,
                                                @PathVariable Long taskId) {
        UserDto user = userService.getAuthenticatedUser();
        validate(user, projectId, sprintId);

        return commentService.getCommentsByTaskId(taskId);
    }

    @PostMapping("/projects/{projectId}/tasks/sprints/{sprintId}/{taskId}/comments")
    public CommentInfoDto createComment(@PathVariable Long projectId,
                                        @PathVariable Long sprintId,
                                        @PathVariable Long taskId,
                                        @RequestBody CommentInfoDto commentInfo) {
        UserDto user = userService.getAuthenticatedUser();
        validate(user, projectId, sprintId);
        return commentService.createComment(commentInfo, taskId);
    }

    @PutMapping("/projects/{projectId}/tasks/{taskId}/sprints/{sprintId}/comments/{commentId}")
    public void updateComment(@PathVariable Long projectId,
                              @PathVariable Long taskId,
                              @PathVariable Long sprintId,
                              @PathVariable Long commentId,
                              @RequestBody CommentInfoDto commentInfo) {
        UserDto user = userService.getAuthenticatedUser();
        validate(user, projectId, sprintId);

        if (commentService.updateComment(commentInfo, commentId, user.getId()) == null) {
            throw new IllegalArgumentException("Нет доступа");
        }
    }

    @DeleteMapping("/projects/{projectId}/tasks/{taskId}/sprints/{sprintId}/comments/{commentId}")
    public void deleteComment(@PathVariable Long projectId,
                              @PathVariable Long taskId,
                              @PathVariable Long sprintId,
                              @PathVariable Long commentId) {
        UserDto user = userService.getAuthenticatedUser();
        validate(user, projectId, sprintId);
        commentService.deleteComment(commentId, user.getId());
    }

    private void validate(UserDto user, Long projectId, Long sprintId) {
        if (!projectService.validateUserProject(user, projectId, sprintId)) {
            throw new IllegalArgumentException("Нет доступа");
        }
    }
}
