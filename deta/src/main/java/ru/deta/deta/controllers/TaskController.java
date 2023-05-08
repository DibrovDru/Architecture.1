package ru.deta.deta.controllers;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
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
        validateUserProject(user, project_id);
        return taskService.getTasksByProjectAndSprint(project_id, sprint_id);
    }

    private void validateUserProject(UserDto user, Long project_id) {

    }
}
