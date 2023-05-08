package ru.deta.deta.service;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import ru.deta.deta.dto.ProjectDto;
import ru.deta.deta.dto.UserDto;
import ru.deta.deta.dto.info.ProjectInfo;
import ru.deta.deta.dto.info.UserInfoDto;
import ru.deta.deta.entities.Project;
import ru.deta.deta.entities.Sprint;
import ru.deta.deta.entities.User;
import ru.deta.deta.repository.ProjectRepo;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
@Slf4j
@RequiredArgsConstructor
public class ProjectService {
    private final ProjectRepo projectRepo;
    private final SprintService sprintService;

    @Transactional
    public ProjectDto getProject(Long id) {
        return new ProjectDto(projectRepo.getReferenceById(id));
    }

    @Transactional
    public Project getProjectEntity(Long id) {
        return projectRepo.getReferenceById(id);
    }

    @Transactional
    public boolean validateUserProject(UserDto user, Long projectId, Long sprintId) {
        if (user == null || projectId == null || sprintId == null) {
            log.info("user or project or sprint id is null");
            return false;
        }

        Project project = projectRepo.getReferenceById(projectId);
        Sprint sprint = sprintService.getSprintById(sprintId);

        if (project.getId() == null) {
            log.info("project with id {} is null", projectId);
            return false;
        }

        if (sprint == null) {
            log.info("sprint with id {} is null", sprintId);
            return false;
        }

        if (!projectId.equals(sprint.getProject().getId())) {
            log.info("sprint with id {} is not connected with project with id {}", sprintId, projectId);
            return false;
        }

        if (!user.getId().equals(project.getAuthor().getId())) {
            log.info("user with id {} is not author of project with id {}", user.getId(), projectId);
            return false;
        }

        return true;
    }

    @Transactional
    public List<UserInfoDto> getParticipants(Long projectId) {
        Project project = projectRepo.getReferenceById(projectId);

        if (project.getId() == null) {
            log.info("there is no such project with id {}", projectId);
            return null;
        }

        List<UserInfoDto> res = new ArrayList<>();
        res.add(new UserInfoDto(project.getAuthor()));
        res.addAll(project.getParticipants()
                .stream()
                .map(UserInfoDto::new)
                .collect(Collectors.toList()));
        return res;
    }

    @Transactional
    public List<ProjectInfo> getProjects(UserDto userDto) {
        return projectRepo.getAllPersonProjects(userDto.getId())
                .stream()
                .map(ProjectInfo::new)
                .collect(Collectors.toList());
    }
}
