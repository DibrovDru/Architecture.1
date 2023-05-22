package ru.deta.deta.controllers;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;
import ru.deta.deta.dto.UserDto;
import ru.deta.deta.dto.info.SprintInfoDto;
import ru.deta.deta.service.ProjectService;
import ru.deta.deta.service.SprintService;
import ru.deta.deta.service.UserService;

import java.text.ParseException;
import java.util.List;
import java.util.Objects;

@Slf4j
@RestController
@RequiredArgsConstructor
public class SprintController {
    private final UserService userService;
    private final SprintService sprintService;
    private final ProjectService projectService;

    @GetMapping("/projects/{projectId}/sprints")
    public List<SprintInfoDto> getProjectSprints(@PathVariable Long projectId) {
        UserDto user = userService.getAuthenticatedUser();
        validateUserProject(user, projectId, false);

        return sprintService.getSprintsByProjectId(projectId);
    }

    @PostMapping("/projects/{projectId}/sprints")
    public SprintInfoDto createSprint(@PathVariable Long projectId,
                                      @RequestBody SprintInfoDto sprintInfo) throws ParseException {
        UserDto user = userService.getAuthenticatedUser();
        validateUserProject(user, projectId, true);
        validateSprintInfo(user, projectId, sprintInfo);
        return projectService.createSprint(sprintInfo, projectId);
    }

    @GetMapping("/projects/{projectId}/sprints/{sprintId}")
    public SprintInfoDto getSprint(@PathVariable Long projectId,
                                   @PathVariable Long sprintId) {
        UserDto user = userService.getAuthenticatedUser();
        validateUserProject(user, projectId, false);

        return sprintService.getSprintsByIdAndProjectId(projectId, sprintId);
    }

    @PutMapping("/projects/{projectId}/sprints/{sprintId}")
    public void updateSprint(@PathVariable Long projectId,
                                   @PathVariable Long sprintId,
                                   @RequestBody SprintInfoDto sprintInfo) throws ParseException {
        UserDto user = userService.getAuthenticatedUser();
        validateUserProject(user, projectId, true);
        validateSprintInfo(user, projectId, sprintInfo);

        if (!Objects.equals(sprintId, sprintInfo.getId())) {
            log.info("sprintId is {} and sprintInfo.id is {}, something is wrong", sprintId, sprintInfo.getId());
            throw new IllegalArgumentException("Нет доступа");
        }

        sprintService.updateSprintInfo(projectId, sprintInfo);
    }

    @DeleteMapping("/projects/{projectId}/sprints/{sprintId}")
    public void deleteSprint(@PathVariable Long projectId,
                             @PathVariable Long sprintId) throws ParseException {
        log.info("sprint deleting will be soon");
    }

    private void validateUserProject(UserDto user, Long projectId, boolean authorRequired) {
        if (!projectService.validateUserProject(user, projectId, authorRequired)) {
            throw new IllegalArgumentException("Нет доступа");
        }
    }

    private void validateSprintInfo(UserDto user, Long projectId, SprintInfoDto sprintInfo) {
        if (sprintInfo == null || sprintInfo.getId() == null ||
                sprintInfo.getDescription() == null ||
                sprintInfo.getName() == null ||
                sprintInfo.getStartedAt() == null ||
                sprintInfo.getFinishedAt() == null ||
                !projectService.validateUserProject(user, projectId, sprintInfo.getId())) {
            throw new IllegalArgumentException("Нет доступа");
        }
    }
}
