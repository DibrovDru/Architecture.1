package ru.deta.deta.dto.info;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import ru.deta.deta.entities.Relation;

@Getter
@Setter
@NoArgsConstructor
public class RelationInfoDto {
    private Long id;
    private String boss;
    private String employee;

    public RelationInfoDto(Relation relation) {
        id = relation.getId();
        boss = relation.getMaster().getEmail();
        employee = relation.getSlave().getEmail();
    }
}
