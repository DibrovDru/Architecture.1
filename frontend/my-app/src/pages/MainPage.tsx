import React, { useState } from 'react';
import MyHeader from "../components/Header";
import MyFooter from "../components/Footer";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Menu from "../components/Menu";
import Tasks from "../components/Tasks";

function MainPage() {

    return (
        <div>
            <MyHeader/>
            <Container>
                <Row>
                    <Col sm={2}>
                        <Menu/>
                    </Col>
                    {/*<Col sm={9}>*/}
                        <Tasks/>
                    {/*</Col>*/}
                    <Col sm={1}>
                        Автор
                    </Col>
                </Row>
            </Container>
            <MyFooter/>
        </div>
    );
}

export default MainPage;
