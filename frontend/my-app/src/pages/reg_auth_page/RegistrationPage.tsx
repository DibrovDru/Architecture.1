import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import RegistrationCard from "../../components/RegistrationCard";
import reg_auth_styles from "./RegAuth.module.css";
import app_styles from "../../App.module.css";
import ImgCard from "../../components/ImgCard";
import ContainerDeta from "../../components/ContainerDeta";
import AutorisationCard from "../../components/AutorisationCard";

function RegistrationPage() {
    return (
        <Container>
            <Row className={app_styles.height_full_screen}>
                <Col className={`${app_styles.to_center} ${app_styles.grey}`}>

                    <ContainerDeta style_card={`${reg_auth_styles.card_width} ${app_styles.grey}`}
                                   img_path={require('../../images/deta.png')}
                                   img_style={app_styles.deta}
                                   name={'Вход в систему'}
                                   // next_button={'Готово'}
                                   prev_button={'Авторизация'}
                    >
                        <RegistrationCard />
                    </ContainerDeta>


                </Col>

                <Col className={app_styles.to_center}>
                    <ImgCard/>
                </Col>
            </Row>
        </Container>
    );
}

export default RegistrationPage;
