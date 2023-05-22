package ru.deta.deta.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@Table(name = "relations")
@NoArgsConstructor
@AllArgsConstructor
public class Relation {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @OneToOne
    private User master;

    @OneToOne
    private User slave;

    @ManyToOne
    private Project project;

    @Column(name = "deleted")
    private Boolean deleted = false;
}
