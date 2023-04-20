import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import React from "react";
import RegistrationCard from "./RegistrationCard";

function ProjectCard() {
    return (
        <Card style={{ width: '20rem', backgroundColor: '#5322D0'}}>
            <Card.Header style={{color: 'white', fontWeight: '700', fontSize: 28}}>Крутой проект</Card.Header>
            <Card.Body>
                <Card.Text style={{height: '200px', color: 'white'}}>
                    Очень крутой проект про созданию мобильного приложения для всех людей на Земле!
                </Card.Text>
                <Button variant="primary" style={{width: '100%'}}>Выбрать проект</Button>
            </Card.Body>
        </Card>
    );
}

export default ProjectCard;