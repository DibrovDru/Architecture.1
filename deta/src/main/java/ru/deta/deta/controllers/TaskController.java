package ru.deta.deta.controllers;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import ru.deta.deta.dto.UserDto;
import ru.deta.deta.dto.info.TaskInfoDto;
import ru.deta.deta.service.ProjectService;
import ru.deta.deta.service.TaskService;
import ru.deta.deta.service.UserService;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class TaskController {
    private final UserService userService;
    private final TaskService taskService;
    private final ProjectService projectService;

    @GetMapping("/projects/{project_id}/tasks/sprints/{sprint_id}")
    public List<TaskInfoDto> getTasks(@PathVariable Long project_id,
                                      @PathVariable Long sprint_id) {
        UserDto user = userService.getAuthenticatedUser();
        validateUserProject(user, project_id, sprint_id);
        return taskService.getTasksByProjectAndSprint(project_id, sprint_id);
    }

    @PostMapping("/projects/{project_id}/tasks/sprints/{sprint_id}")
    public TaskInfoDto createTask(@PathVariable Long project_id,
                           @PathVariable Long sprint_id,
                           @RequestBody TaskInfoDto taskInfo) {
        UserDto user = userService.getAuthenticatedUser();
        validateUserProject(user, project_id, sprint_id);

        if (taskInfo == null) {
            throw new IllegalArgumentException("request body cannot be null");
        }

        return taskService.createTask(project_id, sprint_id, taskInfo);
    }

    @PutMapping("/projects/{project_id}/tasks/sprints/{sprint_id}/{task_id}")
    public void updateTask(@PathVariable Long project_id,
                           @PathVariable Long sprint_id,
                           @PathVariable Long task_id,
                           @RequestBody TaskInfoDto taskInfo) {
        UserDto user = userService.getAuthenticatedUser();
        validateUserProject(user, project_id, sprint_id);

        if (taskInfo == null) {
            throw new IllegalArgumentException("request body cannot be null");
        }

        taskService.updateTask(task_id, sprint_id, taskInfo);
    }

    @GetMapping("/projects/{project_id}/tasks/sprints/{sprint_id}/{task_id}")
    public TaskInfoDto getTask(@PathVariable Long project_id,
                               @PathVariable Long sprint_id,
                               @PathVariable Long task_id) {
        UserDto user = userService.getAuthenticatedUser();
        validateUserProject(user, project_id, sprint_id);
        return taskService.getTaskById(project_id, sprint_id, task_id);
    }

    @DeleteMapping("/projects/{project_id}/tasks/sprints/{sprint_id}/{task_id}")
    public void deleteTask(@PathVariable Long project_id,
                               @PathVariable Long sprint_id,
                               @PathVariable Long task_id) {
        UserDto user = userService.getAuthenticatedUser();
        validateUserProject(user, project_id, sprint_id);
        taskService.deleteTaskById(project_id, sprint_id, task_id);
    }

    private void validateUserProject(UserDto user, Long projectId, Long sprintId) {
        if (!projectService.validateUserProject(user, projectId, sprintId)) {
            throw new IllegalArgumentException("Нет доступа");
        }
    }
}
