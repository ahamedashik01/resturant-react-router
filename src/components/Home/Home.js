import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Home = () => {
    return (
        <div className="d-flex justify-content-center align-items-center">
            <Container className="my-5">
                <Row>
                    <Col md={6} className="d-flex justify-content-center align-items-center">
                        <div>
                            <h6>Discover Your Teste</h6>
                            <h1>We believe good food <br />offer great smile.</h1>
                        </div>

                    </Col>
                    <Col md={6}>
                        <div>
                            <img className="img-fluid rounded-3" src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80" alt="" />
                        </div>

                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Home;