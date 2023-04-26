import React, {FC} from "react";
import app_styles from '../../App.module.css';
import task_pages_styles from '../../pages/main_tasks_page/TasksPage.module.css';
import base_styles from '../base/base.module.css';
import {comments} from "../../state/state";
import {Comment, Employee} from "../../types";
import Card from "react-bootstrap/Card";
import comments_styles from './Comments.module.css';
import Button from "react-bootstrap/Button";
import { Form } from "react-bootstrap";


interface MyCommentProps {
    comment: Comment,
    is_written: boolean
}

const MyComment: FC<MyCommentProps> = ({comment, is_written}) => {
    return (
        <Card className={comments_styles.comment}>
            <div style={{margin: '10px 10px'}}>
                <img src={require('../../images/profile.png')} className={base_styles.profile}/>
            </div>
            <Card.Body>
                <Card.Title> {comment.author.name} </Card.Title>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control
                        type="text"
                        placeholder="Комментарий"
                        value={comment.text}
                        readOnly={is_written} />
                </Form.Group>

                <div style={{display: 'flex', justifyContent: 'end'}}>
                    <Button variant="primary"> {is_written ? 'Редактировать' : 'Отправить' }</Button>
                </div>
            </Card.Body>
        </Card>
    );
}


function Comments() {

    return (
        <>
            {comments.map(comment => (
                <MyComment comment={comment}
                           is_written={true}
                />
                )
            )}
            <MyComment comment={comments[0]} is_written={false}/>
        </>
    );
}
export default Comments;