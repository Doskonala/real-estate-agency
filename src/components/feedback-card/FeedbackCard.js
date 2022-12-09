import React from 'react';
import {Card, Button} from "react-bootstrap";

const FeedbackCard = (props) => {
    return (
        <Card>
            <Card.Img variant="top" scr="holder.js/100px180"/>
            <Card.Body>
                <Card.Title>{props.card.title}</Card.Title>
                <Card.Text>
                    {props.card.description}
                </Card.Text>
                <Button variant="outline-secondary">Корисно</Button>
            </Card.Body>
        </Card>
    );
};

export default FeedbackCard;