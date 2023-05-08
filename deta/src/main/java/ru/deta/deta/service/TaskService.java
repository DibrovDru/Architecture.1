package ru.deta.deta.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import ru.deta.deta.dto.info.TaskInfoDto;
import ru.deta.deta.repository.TaskRepo;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class TaskService {
    private final TaskRepo taskRepo;

    @Transactional
    public List<TaskInfoDto> getTasksByProjectAndSprint(Long projectId, Long sprintId) {
         return taskRepo.getTaskByProjectAndSprint(projectId, sprintId)
                 .stream()
                 .map(TaskInfoDto::new)
                 .collect(Collectors.toList());
    }
}
