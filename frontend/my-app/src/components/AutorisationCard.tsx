import React from 'react';

import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import reg_auth_styles from '../pages/reg_auth_page/RegAuth.module.css';
import app_styles from '../App.module.css';
import ContainerDeta from "./ContainerDeta";
import creation_project_styles from "../pages/creation_project/CreationProject.module.css";
import {CreationProjectInfo} from "./CreationProjectInfo";

function AutorisationCard() {
    return (
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Пароль</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
            </Form>
    );
}

export default AutorisationCard;
