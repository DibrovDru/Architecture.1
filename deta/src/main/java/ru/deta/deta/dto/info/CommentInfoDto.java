package ru.deta.deta.dto.info;

import lombok.Getter;
import lombok.Setter;
import ru.deta.deta.entities.Comment;

import java.text.DateFormat;
import java.text.SimpleDateFormat;

@Getter
@Setter
public class CommentInfoDto {
    private Long id;
    private String timestamp;
    private UserInfoDto author;
    private String text;

    public CommentInfoDto(Comment comment) {
        id = comment.getId();
        DateFormat dateFormat = new SimpleDateFormat("dd.MM.yyyy");
        timestamp = dateFormat.format(comment.getCreatedAt());
        author = new UserInfoDto(comment.getAuthor());
        text = comment.getText();
    }
}
