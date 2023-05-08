package ru.deta.deta.dto.info;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import ru.deta.deta.entities.Sprint;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;

@Getter
@Setter
public class SprintInfoDto {
    private Long id;
    private String name;
    private String startedAt;
    private String finishedAt;
    private String description;
    private Boolean isActual;

    public SprintInfoDto(Sprint sprint) {
        id = sprint.getId();
        name = sprint.getName();
        description = sprint.getDescription();

        DateFormat dateFormat = new SimpleDateFormat("dd.MM.yyyy");
        startedAt = dateFormat.format(sprint.getStartedAt());
        finishedAt = dateFormat.format(sprint.getFinishedAt());

        Date now = new Date();
        isActual = now.before(sprint.getFinishedAt()) && now.after(sprint.getStartedAt());
    }
}
