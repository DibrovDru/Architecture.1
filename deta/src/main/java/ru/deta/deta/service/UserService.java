package ru.deta.deta.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import ru.deta.deta.dto.UserDto;
import ru.deta.deta.entities.User;
import ru.deta.deta.repository.UserRepo;

@Service
@RequiredArgsConstructor
public class UserService {
    private final UserRepo userRepo;

    @Transactional
    public UserDto getAuthenticatedUser() {
        return new UserDto(userRepo.getReferenceById(1L));
    }

    @Transactional
    public User getUser(Long id) {
        return userRepo.getReferenceById(id);
    }

    @Transactional
    public User getUserByEmail(String email) {
        return userRepo.getUserByEmail(email);
    }
}
