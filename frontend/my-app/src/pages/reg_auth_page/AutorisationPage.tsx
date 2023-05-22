import React, {useContext, useState} from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AutorisationCard from "../../components/AutorisationCard";
import app_styles from '../../App.module.css';
import ImgCard from "../../components/ImgCard";
import ContainerDeta from "../../components/ContainerDeta";
import reg_auth_styles from "./RegAuth.module.css";
import {CreationProjectInfo} from "../../components/CreationProjectInfo";
import {defaultUsers} from "../../store/ts_objects";
import {Context} from "../../index";

function AutorisationPage() {
    return (
        <Container>
            <Row className={app_styles.height_full_screen}>
                <Col className={`${app_styles.to_center} ${app_styles.grey}`}>

                    <ContainerDeta style_card={`${reg_auth_styles.card_width} ${app_styles.grey}`}
                                   img_path={require('../../images/deta.png')}
                                   img_style={app_styles.deta}
                                   name={'Вход в систему'}
                                   // next_button={'Готово'}
                                   prev_button={'Регистрация'}
                    >
                        <AutorisationCard />
                    </ContainerDeta>
                </Col>

                <Col className={app_styles.to_center}>
                    <ImgCard />
                </Col>
            </Row>
        </Container>
    );
}

export default AutorisationPage;
