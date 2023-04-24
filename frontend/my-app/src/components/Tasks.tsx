import React, {useState} from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import app_styles from '../App.module.css';
import main_pages_styles from '../pages/main_page/MainPage.module.css';

function TaskCard() {
    return (
        <Card style={{ width: '15rem', marginTop: '10px', height: '200px', overflow: 'hidden' }}>
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content. edvklmeqkvm kevkenrnrnvk enavkmadfklvmndflkvndfklqnv'l qkenkenvkenvklwnekrnvw
                </Card.Text>
            </Card.Body>
        </Card>
    );
}



function Tasks() {

    return (
        <>
        <Col sm={3}>
            <h3 className={`${main_pages_styles.title} ${app_styles.header_weight}`}>
                Все задачи
            </h3>

            <div className={main_pages_styles.task_type}>
                <h5>
                    Открытые
                </h5>
                <div>
                    +
                </div>
            </div>

            <div className={main_pages_styles.sprint}>
                <img src={require('../images/opened_bracket.png')} />
                <p>
                    1 спринт (24.03.2023 - 31.03.2023)
                </p>
            </div>

            <TaskCard/>
            <TaskCard/>

            <div className={main_pages_styles.sprint}>
                <img src={require('../images/opened_bracket.png')} />
                <p>
                    2 спринт (24.03.2023 - 31.03.2023)
                </p>
            </div>

            <TaskCard/>
            <TaskCard/>

        </Col>

        <Col sm={3}>
            <div className={main_pages_styles.title} />
            <div className={main_pages_styles.task_type}>
                <h5>
                    Активные
                </h5>
                <div>
                    +
                </div>
            </div>

            <div className={main_pages_styles.sprint} />

            <TaskCard/>
            <TaskCard/>

            <div className={main_pages_styles.sprint} />

            <TaskCard/>
        </Col>
        <Col>
            <div className={main_pages_styles.title} />
            <div className={main_pages_styles.task_type}>
                <h5>
                    Решенные
                </h5>
                <div>
                    +
                </div>
            </div>

            <div className={main_pages_styles.sprint} />

            <TaskCard/>
        </Col>
        </>
    );
}
export default Tasks;