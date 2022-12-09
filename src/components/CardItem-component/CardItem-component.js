import React from 'react';
import {Button, Card} from "react-bootstrap";
import { useState } from 'react';

const CardItemComponent = (props) =>{
    const [buttonText,setButtonText]=useState('У кошик');
    const [buttonVariant,setButtonVariant]=useState("outline-success");

    const [buttonText2,setButtonText2]=useState('Не цікавить');
    const [buttonVariant2,setButtonVariant2]=useState("outline-danger");

    const addItem = () =>{
        props.getItem(props.card);
        console.log(props.card);
        setButtonText('У кошику');
        setButtonVariant("success");
    }

    const removeItem = () => { 
        props.removeItem(props.card); 
        console.log(props.card); 
        setButtonText('Видалено');
        setButtonVariant("danger");
    } 

    return (
        <>
        <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3">
            <Card>
                <Card.Img variant="top" src={props.card.imgurl}/>
                <Card.Body>
                    <Card.Title>{props.card.name}</Card.Title>
                    <Card.Text>
                        <strong>{props.card.price} грн.</strong>
                    </Card.Text>
                </Card.Body>
                <Card.Footer> 
                    <Button variant={buttonVariant} onClick={addItem}>{/* Button Text */}{buttonText}</Button> 
                    <Button variant={buttonVariant2} onClick={removeItem}>{/* Button Text */}{buttonText2}</Button> 
                </Card.Footer> 
            </Card>
        </div>
    </>
    );
};

export default CardItemComponent;