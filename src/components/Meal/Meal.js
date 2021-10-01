import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const meal = (props) => {
    const { strMeal, strMealThumb, idMeal } = props.meal;
    const url = `/resturant/${idMeal}`;
    return (
        < div >
            <Col>
                <Card>
                    <Card.Img variant="top" src={strMealThumb} />
                    <Card.Body>
                        <Card.Title>{strMeal}</Card.Title>
                        <Card.Text>
                            This is a longer card with supporting text below as a natural
                            lead-in to additional content.This content is a little bit longer.
                        </Card.Text>
                        <Link to={url}>Show Details</Link>
                    </Card.Body>
                </Card>
            </Col>
        </div >
    );
};

export default meal;