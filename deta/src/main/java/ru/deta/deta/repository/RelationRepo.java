package ru.deta.deta.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import ru.deta.deta.entities.Relation;

@Repository
public interface RelationRepo extends JpaRepository<Relation, Long> {
}
