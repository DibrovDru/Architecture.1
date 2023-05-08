package ru.deta.deta.service;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import ru.deta.deta.dto.info.TaskInfoDto;
import ru.deta.deta.entities.Task;
import ru.deta.deta.repository.TaskRepo;

import java.util.List;
import java.util.stream.Collectors;

@Service
@Slf4j
@RequiredArgsConstructor
public class TaskService {
    private final TaskRepo taskRepo;
    private final SprintService sprintService;
    private final ProjectService projectService;
    private final UserService userService;

    @Transactional
    public List<TaskInfoDto> getTasksByProjectAndSprint(Long projectId, Long sprintId) {
        return taskRepo.getTaskByProjectAndSprint(projectId, sprintId)
                .stream()
                .map(TaskInfoDto::new)
                .collect(Collectors.toList());
    }

    @Transactional
    public TaskInfoDto getTaskById(Long projectId, Long sprintId, Long taskId) {
        Task task = taskRepo.getTaskByProjectAndSprintAndTaskId(projectId, sprintId, taskId);
        return task == null ? null : new TaskInfoDto(task);
    }

    @Transactional
    public Task getTaskById(Long taskId) {
        return taskRepo.getReferenceById(taskId);
    }

    @Transactional
    public void deleteTaskById(Long projectId, Long sprintId, Long taskId) {
        Task task = taskRepo.getTaskByProjectAndSprintAndTaskId(projectId, sprintId, taskId);
        if (task != null) {
            taskRepo.delete(task);
        } else {
            log.info("Tried to delete not existing task with id: {}", taskId);
        }
    }

    @Transactional
    public TaskInfoDto createTask(Long projectId, Long sprintId, TaskInfoDto taskInfo) {
        log.info("new task creation");
        Task task = new Task();
        task.setProject(projectService.getProjectEntity(projectId));
        setInfo(task, taskInfo, sprintId);
        return new TaskInfoDto(taskRepo.save(task));
    }

    @Transactional
    public void updateTask(Long taskId, Long sprintId, TaskInfoDto taskInfo) {
        Task task = taskRepo.getReferenceById(taskId);
        log.info("update task with id: {}", taskId);
        setInfo(task, taskInfo, sprintId);
        taskRepo.save(task);
    }

    private void setInfo(Task task, TaskInfoDto taskInfo, Long sprintId) {
        task.setSprint(sprintService.getSprintById(sprintId));
        task.setAuthor(userService.getUser(taskInfo.getCreator().getId()));

        task.setExecutor(userService.getUser(taskInfo.getExecutor().getId()));
        task.setStatus(taskInfo.getType());
        task.setName(taskInfo.getName());
        task.setText(taskInfo.getDescription());
    }
}
