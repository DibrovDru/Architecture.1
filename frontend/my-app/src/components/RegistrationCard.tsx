import React, {useContext, useState} from 'react';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import app_styles from "../App.module.css";
import reg_auth_styles from '../pages/reg_auth_page/RegAuth.module.css';
import {Context} from "../index";
import {observer} from "mobx-react-lite";

function RegistrationCard() {

    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [retypePassword, setRetypePassword] = useState<string>('');

    const {storageCurrentState} = useContext(Context);

    return (
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Как вас зовут?</Form.Label>
                    <Form.Control
                        type="name"
                        placeholder="Enter name"
                        onChange={e => setName(e.target.value)}
                        value={name}
                    />
                </Form.Group>

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

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Повторите пароль</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        onChange={e => setRetypePassword(e.target.value)}
                        value={retypePassword}
                    />
                </Form.Group>

                <Button
                    variant="primary"
                    type="submit"
                    className={`${app_styles.max_width} ${app_styles.main_color}`}
                    onClick={() => storageCurrentState.registration(email, password, name)}
                >
                    Зарегистрироваться
                </Button>
            </Form>
    );
}

export default observer(RegistrationCard);
