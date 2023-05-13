package ru.deta.deta.service;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import ru.deta.deta.dto.UserDto;
import ru.deta.deta.dto.info.ProjectInfoDto;
import ru.deta.deta.dto.info.SprintInfoDto;
import ru.deta.deta.dto.info.UserInfoDto;
import ru.deta.deta.entities.Project;
import ru.deta.deta.entities.Sprint;
import ru.deta.deta.entities.User;
import ru.deta.deta.repository.ProjectRepo;

import java.text.ParseException;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
@Slf4j
@RequiredArgsConstructor
public class ProjectService {
    private final ProjectRepo projectRepo;
    private final SprintService sprintService;
    private final UserService userService;
    private final TaskService taskService;

    @Transactional
    public ProjectInfoDto getProject(Long id) {
        Project project = projectRepo.getReferenceById(id);

//        if (project.getDeleted()) {
//            log.info("project with id {} was deleted", id);
//            throw new IllegalArgumentException("Такого проекта не существует");
//        }

        return new ProjectInfoDto(projectRepo.getReferenceById(id));
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

//        if (project.getDeleted()) {
//            log.info("project with id {} was deleted", projectId);
//            return false;
//        }

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
    public boolean validateUserProject(UserDto user, Long projectId, boolean authorRequired) {
        if (user == null || projectId == null) {
            log.info("user or project id is null");
            return false;
        }

        Project project = projectRepo.getReferenceById(projectId);
        if (project.getId() == null) {
            log.info("project with id {} is null", projectId);
            return false;
        }

//        if (project.getDeleted()) {
//            log.info("project with id {} was deleted", projectId);
//            return false;
//        }

        if (!user.getId().equals(project.getAuthor().getId()) && authorRequired) {
            log.info("user with id {} is not author of project with id {}", user.getId(), projectId);
            return false;
        }

        if (!authorRequired) {
            User userEntity = userService.getUser(user.getId());
            List<User> participants = project.getParticipants();

            return participants.contains(userEntity);
        }

        return true;
    }

    @Transactional
    public List<UserInfoDto> getParticipants(Long projectId) {
        Project project = projectRepo.getReferenceById(projectId);

//        if (project.getDeleted()) {
//            log.info("project with id {} was deleted", projectId);
//            return null;
//        }

        List<UserInfoDto> res = new ArrayList<>();
        res.add(new UserInfoDto(project.getAuthor()));
        res.addAll(project.getParticipants()
                .stream()
                .map(UserInfoDto::new)
                .collect(Collectors.toList()));
        return res;
    }

    @Transactional
    public List<ProjectInfoDto> getProjects(UserDto userDto) {
        return projectRepo.getAllPersonProjects(userDto.getId())
                .stream()
                .map(ProjectInfoDto::new)
                .collect(Collectors.toList());
    }

    @Transactional
    public ProjectInfoDto createProject(UserDto user, ProjectInfoDto projectInfo) {
        Project project = new Project();
        User userEntity = userService.getUser(user.getId());
        project.setAuthor(userEntity);
        project.setName(projectInfo.getName());
        project.setText(projectInfo.getDescription());
        project = projectRepo.save(project);

        List<Project> projects = userEntity.getProjects();
        projects.add(project);
        userEntity.setProjects(projects);
        userService.save(userEntity);
        return new ProjectInfoDto(project);
    }

    @Transactional
    public Project save(Project project) {
        return projectRepo.save(project);
    }

    @Transactional
    public void updateProject(ProjectInfoDto projectInfo) {
        Project project = projectRepo.getReferenceById(projectInfo.getId());
//        if (project.getDeleted()) {
//            return;
//        }
        project.setName(projectInfo.getName());
        project.setText(projectInfo.getDescription());
        projectRepo.save(project);
    }

//    @Transactional
//    public void deleteProject(Long projectId) {
//        Project project = projectRepo.getReferenceById(projectId);
//        project.setDeleted(true);
//        project.getSprints().forEach(s -> {
//            s.setDeleted(true);
//            taskService.deleteTaskById(projectId, s.getId());
//            sprintService.save(s);
//        });
//        projectRepo.save(project);
//    }

    @Transactional
    public SprintInfoDto createSprint(SprintInfoDto sprintInfo, Long projectId) throws ParseException {
        Project project = getProjectEntity(projectId);
        Sprint sprint = sprintService.createSprint(sprintInfo, project);
        List<Sprint> sprints = project.getSprints();
        sprints.add(sprint);
        project.setSprints(sprints);
        save(project);

        return new SprintInfoDto(sprint);
    }
}
