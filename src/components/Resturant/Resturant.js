import React, { useEffect, useState } from 'react';
import { CardGroup, Container, FormControl, InputGroup, Row } from 'react-bootstrap';
import Meal from '../Meal/Meal';

const Resturant = () => {
    const [searchText, setSearchText] = useState('')
    const [meals, setMeals] = useState([]);
    const handleField = e => {
        const searchTextValue = e.target.value;
        setSearchText(searchTextValue);
    }
    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setMeals(data.meals))
    }, [searchText])
    return (
        <div>
            <Container>
                <InputGroup className="my-5 w-75 mx-auto" onChange={handleField}>
                    <FormControl
                        placeholder="Search your favourite dish"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                    />
                </InputGroup>
                <CardGroup>
                    <Row xs={1} md={3} className="g-4">
                        {
                            meals.map(meal => <Meal
                                key={meal.idMeal}
                                meal={meal}
                            >

                            </Meal>)
                        }
                    </Row>
                </CardGroup>
            </Container>
        </div>
    );
};

export default Resturant;