import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';

const MealDetails = () => {
    const { itemId } = useParams();
    const [item, setItem] = useState([])
    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${itemId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data.meals[0]))
    }, [])
    const { strMealThumb, strMeal, strInstructions } = item
    return (

        <div >
            <Container className=" d-flex my-5">
                <div className="me-5">
                    <div>
                        <img src={strMealThumb} alt="" />
                    </div>
                </div>
                <div>
                    <div>
                        <h2>{strMeal}</h2>
                        <h4>Instructions :</h4>
                        <p>{strInstructions}</p>
                    </div>
                </div>
            </Container>
        </div >

    );
};

export default MealDetails;