package ru.deta.deta.controllers;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import ru.deta.deta.dto.info.UserInfoDto;
import ru.deta.deta.service.UserService;

@RestController
@RequiredArgsConstructor
public class UsersController {
    private final UserService userService;

    @GetMapping("/user/{userId}")
    public UserInfoDto getUserById(@PathVariable Long userId) {
        return userService.getUserInfo(userId);
    }
}
