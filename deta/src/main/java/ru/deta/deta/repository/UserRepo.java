package ru.deta.deta.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import ru.deta.deta.entities.User;

@Repository
public interface UserRepo extends JpaRepository<User, Long> {
    User getUserByEmail(String email);
}
