import Card from "react-bootstrap/Card";
import app_styles from "../App.module.css";
import React from "react";

function ImgCard() {
    return (
        <Card className={app_styles.img_width}>
            <Card.Img variant="top" src={require('../images/man.png')}/>
            <Card.Body>
                <Card.Text className={app_styles.to_center}>
                    Система для управления вашими проектами онлайн
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default ImgCard;
