package ru.deta.deta.dto.info;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import ru.deta.deta.entities.*;

@Getter
@Setter
public class TaskInfoDto {
    private Long id;
    private String name;
    private SprintInfoDto sprint;
    private String description;
    private TaskStatus type;
    private UserInfoDto creator;
    private UserInfoDto executor;

    public TaskInfoDto(Task task) {
        id = task.getId();
        name = task.getName();
        description = task.getText();
        type = task.getStatus();
        creator = new UserInfoDto(task.getAuthor());
        executor = new UserInfoDto(task.getExecutor());
        sprint = new SprintInfoDto(task.getSprint());
    }
}
