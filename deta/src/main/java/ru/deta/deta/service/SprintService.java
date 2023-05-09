package ru.deta.deta.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import ru.deta.deta.entities.Sprint;
import ru.deta.deta.repository.SprintRepo;

@Service
@RequiredArgsConstructor
public class SprintService {
    private final SprintRepo sprintRepo;

    @Transactional
    public Sprint getSprintById(Long id) {
        return sprintRepo.getReferenceById(id);
    }

    @Transactional
    public void save(Sprint sprint) {
        sprintRepo.save(sprint);
    }
}
