package ru.deta.deta.entities;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
@Table(name = "projects")
public class Project {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @OneToOne
    private User author;

    @OneToMany(fetch = FetchType.EAGER)
    @JoinTable(
            name = "project_sprints",
            joinColumns = @JoinColumn(name = "project_id"),
            inverseJoinColumns = @JoinColumn(name = "sprint_id")
    )
    private List<Sprint> sprints = new ArrayList<>();

    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(
            name = "project_participants",
            joinColumns = @JoinColumn(name = "project_id"),
            inverseJoinColumns = @JoinColumn(name = "participant_id")
    )
    private List<User> participants = new ArrayList<>();

    @Column(name = "name")
    private String name;

    @Column(name = "text")
    private String text;

//    @Column(name = "deleted")
//    private Boolean deleted = false;
}
