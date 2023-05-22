package ru.deta.deta.dto.info;

import lombok.Getter;
import lombok.Setter;
import ru.deta.deta.entities.User;

@Getter
@Setter
public class UserInfoDto {
    private Long id;
    private String name;
    private String surname;
    private String login;

    public UserInfoDto(User user) {
        id = user.getId();
        name = user.getName();
        login = user.getEmail();
        surname = user.getSurname();
    }
}
