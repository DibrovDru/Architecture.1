package ru.deta.deta.controllers;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import ru.deta.deta.dto.UserDto;
import ru.deta.deta.dto.info.ProjectInfo;
import ru.deta.deta.service.ProjectService;
import ru.deta.deta.service.UserService;

import java.util.List;

@RestController
@AllArgsConstructor
public class ProjectController {
    private final UserService userService;
    private final ProjectService projectService;

    @GetMapping("/projects")
    public List<ProjectInfo> getProjects() {
        UserDto user = userService.getAuthenticatedUser();
        return projectService.getProjects(user);
    }
}
