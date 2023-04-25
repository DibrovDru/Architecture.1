import Card from "react-bootstrap/Card";
import app_styles from "../App.module.css";
import React, {Component, FC, ReactChild, ReactChildren, ReactElement} from "react";
import creation_project_styles from "../pages/creation_project/CreationProject.module.css";
import {CreationProjectInfo} from "./CreationProjectInfo";
import Button from "react-bootstrap/Button";

interface ContainerDetaProps {
    name: string,
    next_button: string,
    prev_button:string,
    style_card?: string,
    img_path?: string,
    img_style?: string,
    children?: ReactElement<any>
}

const ContainerDeta: FC<ContainerDetaProps> = ({
                                               style_card,
                                               img_path,
                                               img_style,
                                               name,
                                               next_button,
                                               prev_button,
                                               children}) => {
    return (
        <Card className={style_card}>
            <Card.Img variant="top" src={img_path} className={img_style}/>
            <Card.Body>
                <Card.Title className={app_styles.to_center}> { name } </Card.Title>
            </Card.Body>

            {children}

            <Button variant="primary" type="submit" className={`${app_styles.max_width} ${app_styles.main_color}`}>
                {next_button}
            </Button>

            <Card.Body>
                <Card.Link href="#" className={app_styles.to_center}> { prev_button } </Card.Link>
            </Card.Body>
        </Card>
    );
}

export default ContainerDeta;
