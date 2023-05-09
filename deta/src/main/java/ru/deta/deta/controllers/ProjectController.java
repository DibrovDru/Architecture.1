package ru.deta.deta.controllers;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;
import ru.deta.deta.dto.UserDto;
import ru.deta.deta.dto.info.ProjectInfoDto;
import ru.deta.deta.service.ProjectService;
import ru.deta.deta.service.UserService;

import java.util.List;
import java.util.Objects;

@Slf4j
@RestController
@AllArgsConstructor
public class ProjectController {
    private final UserService userService;
    private final ProjectService projectService;

    @GetMapping("/projects")
    public List<ProjectInfoDto> getProjects() {
        UserDto user = userService.getAuthenticatedUser();
        return projectService.getProjects(user);
    }

    @PostMapping("/projects")
    public ProjectInfoDto createProject(@RequestBody ProjectInfoDto projectInfo) {
        UserDto user = userService.getAuthenticatedUser();
        validateProjectInfo(projectInfo, user);
        return projectService.createProject(user, projectInfo);
    }

    @GetMapping("/projects/{projectId}")
    public ProjectInfoDto getProject(@PathVariable Long projectId) {
        ProjectInfoDto projectInfo = projectService.getProject(projectId);
        UserDto user = userService.getAuthenticatedUser();

        validateProjectInfo(projectInfo, user);
        validateProjectId(projectInfo, projectId);
        return projectInfo;
    }

    @PutMapping("/projects/{projectId}")
    public void updateProject(@PathVariable Long projectId,
                              @RequestBody ProjectInfoDto projectInfo) {
        UserDto user = userService.getAuthenticatedUser();
        validateProjectInfo(projectInfo, user);
        validateProjectId(projectInfo, projectId);
        projectService.updateProject(projectInfo);
    }

    @DeleteMapping("/projects/{projectId}")
    public void deleteProject(@PathVariable Long projectId,
                              @RequestBody ProjectInfoDto projectInfo) {
        UserDto user = userService.getAuthenticatedUser();
        validateProjectInfo(projectInfo, user);
        validateProjectId(projectInfo, projectId);
        projectService.updateProject(projectInfo);
    }

    private void validateProjectInfo(ProjectInfoDto projectInfo, UserDto user) {

    }

    private void validateProjectId(ProjectInfoDto projectInfo, Long projectId) {
        if (!Objects.equals(projectId, projectInfo.getId())) {
            log.info("project info was with id {} but projectId was {}", projectInfo.getId(), projectId);
            throw new IllegalArgumentException("Нет доступа");
        }
    }
}
