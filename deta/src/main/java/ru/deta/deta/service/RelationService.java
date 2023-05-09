package ru.deta.deta.service;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import ru.deta.deta.dto.info.RelationInfoDto;
import ru.deta.deta.entities.Project;
import ru.deta.deta.entities.Relation;
import ru.deta.deta.entities.User;
import ru.deta.deta.repository.RelationRepo;

import java.util.List;

@Slf4j
@Service
@RequiredArgsConstructor
public class RelationService {
    private final UserService userService;
    private final RelationRepo relationRepo;
    private final ProjectService projectService;

    @Transactional
    public RelationInfoDto createRelation(Long projectId, RelationInfoDto relationInfo) {
        Project project = projectService.getProjectEntity(projectId);

        if (project == null) {
            log.info("there is no project with id {}", projectId);
            throw new IllegalArgumentException("Недопустимая операция");
        }

        if (relationInfo.getBoss() == null || relationInfo.getEmployee() == null) {
            log.info("boss or employee cannot be null");
            throw new IllegalArgumentException("Недопустимая операция");
        }

        User master = userService.getUserByEmail(relationInfo.getBoss());
        User slave = userService.getUserByEmail(relationInfo.getEmployee());

        if (slave == null || master == null) {
            log.info("there is no users with email {} or {}", relationInfo.getBoss(), relationInfo.getEmployee());
            throw new IllegalArgumentException("Недопустимая операция");
        }

        if (relationInfo.getEmployee().equals(relationInfo.getBoss())) {
            log.info("cannot create relation with equals emails {}", relationInfo.getBoss());
            throw new IllegalArgumentException("Недопустимая операция");
        }

        if (relationRepo.getRelationByMasterAndSlaveAndProjectAndDeletedEquals(master, slave, project, false) != null ||
                relationRepo.getRelationByMasterAndSlaveAndProjectAndDeletedEquals(slave, master, project, false) != null) {
            log.info("this relation exists");
            return null;
        }

        Relation relation = new Relation();
        relation.setMaster(master);
        relation.setSlave(slave);
        relation.setProject(project);

        List<User> users = project.getParticipants();
        users.add(slave);
        project.setParticipants(users);
        projectService.save(project);

        return new RelationInfoDto(relationRepo.save(relation));
    }

    @Transactional
    public void updateRelation(RelationInfoDto relationInfo, Long projectId) {
        Project project = projectService.getProjectEntity(projectId);

        if (project == null) {
            log.info("there is no project with id {}", projectId);
            throw new IllegalArgumentException("Недопустимая операция");
        }

        if (relationInfo == null || relationInfo.getId() == null) {
            log.info("relation info or it's id was null");
            throw new IllegalArgumentException("Недопустимая операция");
        }

        Relation relation = relationRepo.getReferenceById(relationInfo.getId());

        if (!projectId.equals(relation.getProject().getId())) {
            log.info("relation with id {} is not connected with project with id {}", relation.getId(), projectId);
            throw new IllegalArgumentException("Недопустимая операция");
        }

        User master = userService.getUserByEmail(relationInfo.getBoss());
        User slave = userService.getUserByEmail(relationInfo.getEmployee());

        if (slave == null || master == null) {
            log.info("there is no users with email {} or {}", relationInfo.getBoss(), relationInfo.getEmployee());
            throw new IllegalArgumentException("Недопустимая операция");
        }

        relation.setMaster(master);
        relation.setSlave(slave);
        relationRepo.save(relation);
    }


}
