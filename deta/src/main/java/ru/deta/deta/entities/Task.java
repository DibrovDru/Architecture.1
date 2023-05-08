package ru.deta.deta.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
@Table(name = "tasks")
@NoArgsConstructor
@AllArgsConstructor
public class Task {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name = "started")
    @Enumerated(EnumType.STRING)
    private TaskStatus status;

    @OneToOne
    private User author;

    @OneToOne
    private User executor;

    @ManyToOne
    private Sprint sprint;

    @Column(name = "name")
    private String name;

    @Column(name = "text")
    private String text;

    @OneToMany
    @JoinTable(
            name = "task_comments",
            joinColumns = @JoinColumn(name = "project_id"),
            inverseJoinColumns = @JoinColumn(name = "sprint_id")
    )
    private List<Comment> comments = new ArrayList<>();

    @ManyToOne
    private Project project;
}
