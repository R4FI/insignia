import React from 'react';
import { Container, Row,Col } from 'react-bootstrap';
import './Subscribe.css';
const Subscribe = () => {
    return (
        <div>
            <Container className="subs">
                    <Row>
                        <Col md={6}>
                            <h2 style={{textAlign: "left"}} className="headclor">Subscribe !</h2>
                            <p style={{textAlign: "left"}} className="mt-3">Join our newsletter to never miss any latest news.</p>
                         </Col>


                        <Col md={6}>
                        <div class="buttonInside">
                        <input type="email" placeholder="Enter your e-mail address here"/>
                        <button className="btttn">Join Us</button>
                        </div>
                        </Col>
                    </Row>
            </Container>
        </div>
    );
};

export default Subscribe;