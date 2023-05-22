package ru.deta.deta.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import ru.deta.deta.entities.Project;
import ru.deta.deta.entities.Relation;
import ru.deta.deta.entities.User;

@Repository
public interface RelationRepo extends JpaRepository<Relation, Long> {
    Relation getRelationByMasterAndSlaveAndProject(User master, User slave, Project project);
}
