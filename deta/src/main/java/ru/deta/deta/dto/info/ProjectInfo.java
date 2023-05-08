package ru.deta.deta.dto.info;

import lombok.Getter;
import lombok.Setter;
import ru.deta.deta.entities.Project;

@Getter
@Setter
public class ProjectInfo {
    private Long id;
    private String name;
    private String description;
    private UserInfoDto author;

    public ProjectInfo(Project project) {
        id = project.getId();
        name = project.getName();
        description = project.getText();
        author = new UserInfoDto(project.getAuthor());
    }
}
