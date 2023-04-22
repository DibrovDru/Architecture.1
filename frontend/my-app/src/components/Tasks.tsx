import React, {useState} from "react";
import { Row } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

function TaskCard() {
    return (
        <Card style={{ width: '15rem', marginTop: '10px' }}>
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
        </Card>
    );
}



function Tasks() {

    return (
        <>
        <Col sm={3}>
            <h3 style={{marginBottom: '20px'}}>
                Все задачи
            </h3>

            <div style={{display: 'flex', justifyContent: 'space-between', marginRight: '30px', borderBottom: 'solid 1px'}}>
                <h5>
                    Открытые
                </h5>
                <div>
                    +
                </div>
            </div>

            <div style={{display: 'flex', marginTop: '30px'}}>
                <img src={require('../images/opened_bracket.png')} style={{objectFit: 'scale-down'}}/>
                <h5>
                    1 спринт (24.03.2023 - 31.03.2023)
                </h5>
            </div>

            <TaskCard/>
            <TaskCard/>
        </Col>

        <Col sm={3}>
            <div style={{display: 'flex', justifyContent: 'space-between', marginRight: '30px', borderBottom: 'solid 1px', marginTop: '54px'}}>
                <h5>
                    Открытые
                </h5>
                <div>
                    +
                </div>
            </div>

            <TaskCard/>
        </Col>
        <Col>
            <div style={{display: 'flex', justifyContent: 'space-between', marginRight: '30px', borderBottom: 'solid 1px', marginTop: '54px'}}>
                <h5>
                    Открытые
                </h5>
                <div>
                    +
                </div>
            </div>

            <TaskCard/>
        </Col>
        </>
    );
}
export default Tasks;