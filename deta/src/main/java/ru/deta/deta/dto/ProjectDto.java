package ru.deta.deta.dto;

import lombok.Getter;
import lombok.Setter;
import ru.deta.deta.entities.Project;
import ru.deta.deta.entities.User;

import java.util.List;
import java.util.stream.Collectors;

@Getter
@Setter
public class ProjectDto {
    private Long id;
    private Long author;
    private List<SprintDto> sprints;
    private List<Long> participants;
    private String name;
    private String text;

    public ProjectDto(Project project) {
        id = project.getId();
        author = project.getAuthor().getId();

        sprints = project.getSprints()
                .stream()
                .map(SprintDto::new)
                .collect(Collectors.toList());

        participants = project.getParticipants()
                .stream()
                .map(User::getId)
                .collect(Collectors.toList());
        name = project.getName();
        text = project.getText();
    }
}
