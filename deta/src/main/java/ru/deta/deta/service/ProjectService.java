package ru.deta.deta.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import ru.deta.deta.dto.ProjectDto;
import ru.deta.deta.repository.ProjectRepo;

@Service
@RequiredArgsConstructor
public class ProjectService {
    private final ProjectRepo projectRepo;

    @Transactional
    public ProjectDto getProject(Long id) {
        return new ProjectDto(projectRepo.getReferenceById(id));
    }
}
