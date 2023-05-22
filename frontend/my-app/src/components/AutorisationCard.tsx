import React, {useContext, useState} from 'react';

import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import reg_auth_styles from '../pages/reg_auth_page/RegAuth.module.css';
import app_styles from '../App.module.css';
import ContainerDeta from "./ContainerDeta";
import creation_project_styles from "../pages/creation_project/CreationProject.module.css";
import {CreationProjectInfo} from "./CreationProjectInfo";
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import {useNavigate} from "react-router-dom";
import AuthService from "../logic/services/AuthService";

function AutorisationCard() {
    const navigate = useNavigate();

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const {storageCurrentState} = useContext(Context);

    const login = (email: string, password: string) => {
        storageCurrentState.login(email, password);
        if (storageCurrentState.isAuth) {
            navigate("/projects");
        }
    }

    return (
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter email"
                        onChange={e => setEmail(e.target.value)}
                        value={email}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Пароль</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        onChange={e => setPassword(e.target.value)}
                        value={password}
                    />
                </Form.Group>

                <Button
                    variant="primary"
                    type="submit"
                    className={`${app_styles.max_width} ${app_styles.main_color}`}
                    onClick={() => login(email, password)}
                >
                    Войти
                </Button>
            </Form>
    );
}

export default observer(AutorisationCard);
