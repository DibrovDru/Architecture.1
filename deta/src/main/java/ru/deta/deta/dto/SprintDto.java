package ru.deta.deta.dto;

import ru.deta.deta.entities.Sprint;

import java.util.Date;

public class SprintDto {
    private Long id;
    private Long number;
    private Date startedAt;
    private Date finishedAt;
    private Long project;

    public SprintDto(Sprint sprint) {
        id = sprint.getId();
        number = sprint.getNumber();
        startedAt = sprint.getStartedAt();
        finishedAt = sprint.getFinishedAt();
        project = sprint.getProject().getId();
    }
}
