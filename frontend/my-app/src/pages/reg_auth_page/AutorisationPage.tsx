import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AutorisationCard from "../../components/AutorisationCard";
import app_styles from '../../App.module.css';
import ImgCard from "../../components/ImgCard";

function AutorisationPage() {
    return (
        <Container>
            <Row className={app_styles.height_full_screen}>
                <Col className={`${app_styles.to_center} ${app_styles.grey}`}>
                    <AutorisationCard />
                </Col>

                <Col className={app_styles.to_center}>
                    <ImgCard />
                </Col>
            </Row>
        </Container>
    );
}

export default AutorisationPage;
