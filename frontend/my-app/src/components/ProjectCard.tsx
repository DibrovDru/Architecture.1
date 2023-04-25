import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import React, {FC} from "react";
import app_styles from '../App.module.css';
import projects_styles from '../pages/projects_page/ProjectsPage.module.css';
import {Employee, Project} from "../types";

const ProjectCard: FC<Project> = ({
                                      id,
                                      name,
                                      description,
                                      creator
}) => {
    return (
        <Card className={`${app_styles.main_color} ${projects_styles.width_card_project}`}>
            <Card.Header className={`${projects_styles.header_text} ${app_styles.header_weight}`}> { name } </Card.Header>
            <Card.Body>
                <Card.Text className={projects_styles.body_text}>
                    { description }
                </Card.Text>
                <Button variant="primary" className={`${app_styles.max_width} ${app_styles.white} ${app_styles.text_main_color}`}>Выбрать проект</Button>
            </Card.Body>
        </Card>
    );
}

export default ProjectCard;