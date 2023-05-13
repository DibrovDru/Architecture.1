package ru.deta.deta.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import ru.deta.deta.dto.info.SprintInfoDto;
import ru.deta.deta.entities.Project;
import ru.deta.deta.entities.Sprint;
import ru.deta.deta.repository.SprintRepo;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class SprintService {
    private final SprintRepo sprintRepo;

    @Transactional
    public Sprint getSprintById(Long id) {
        return sprintRepo.getReferenceById(id);
    }

    @Transactional
    public void save(Sprint sprint) {
        sprintRepo.save(sprint);
    }

    @Transactional
    public List<SprintInfoDto> getSprintsByProjectId(Long projectId) {
        return sprintRepo.getSprintsByProjectIdOrderByNumberDesc(projectId)
                .stream()
                .map(SprintInfoDto::new)
                .collect(Collectors.toList());
    }

    @Transactional
    public Sprint createSprint(SprintInfoDto sprintInfo, Project project) throws ParseException {
        DateFormat dateFormat = new SimpleDateFormat("dd.MM.yyyy");

        Sprint sprint = new Sprint();
        sprint.setDeleted(false);
        sprint.setName(sprintInfo.getName());
        sprint.setDescription(sprintInfo.getDescription());
        sprint.setStartedAt(dateFormat.parse(sprintInfo.getStartedAt()));
        sprint.setFinishedAt(dateFormat.parse(sprintInfo.getFinishedAt()));
        sprint.setProject(project);
        var opt = project.getSprints().stream().max(Comparator.comparing(Sprint::getNumber));
        sprint.setNumber(opt.map(value -> value.getNumber() + 1).orElse(0L));
        return sprintRepo.save(sprint);
    }

    @Transactional
    public SprintInfoDto getSprintsByIdAndProjectId(Long projectId, Long sprintId) {
        return new SprintInfoDto(sprintRepo.getSprintByIdAndProjectId(sprintId, projectId));
    }

    @Transactional
    public void updateSprintInfo(Long sprintId, SprintInfoDto sprintInfo) throws ParseException {
        Sprint sprint = sprintRepo.getReferenceById(sprintId);
        DateFormat dateFormat = new SimpleDateFormat("dd.MM.yyyy");
        sprint.setName(sprintInfo.getName());
        sprint.setDescription(sprintInfo.getDescription());
        sprint.setStartedAt(dateFormat.parse(sprintInfo.getStartedAt()));
        sprint.setFinishedAt(dateFormat.parse(sprintInfo.getFinishedAt()));
    }
}
