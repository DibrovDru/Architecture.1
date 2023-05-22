package ru.deta.deta.dto;


import lombok.Getter;
import lombok.Setter;
import ru.deta.deta.entities.User;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Getter
@Setter
public class UserDto {
    private Long id;
    private String email;
    private String password;
    private String name;
    private List<ProjectDto> projects = new ArrayList<>();

    public UserDto(User user) {
        id = user.getId();
        email = user.getEmail();
        password = user.getPassword();
        name = user.getName();

        projects = user.getProjects()
                .stream()
                .map(ProjectDto::new)
                .collect(Collectors.toList());
    }
}
