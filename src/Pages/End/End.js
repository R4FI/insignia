import React from 'react';
import { Col, Container,Row } from 'react-bootstrap';
import './End.css';
import endlogo from "../../Pages/images/logo/Union.png"
const End = () => {
    return (
        <div className="lastpart">
            <Container>
                <Row className="d-flex justify-content-between">
                    <Col md={7}>
                    <p className="reserve mt-3" style={{textAlign: "left"}}>© Insignia™, 2020. All rights reserved.</p>
                    </Col>


                    <Col md={5}>
                     <div className="end mb-3" style={{float: "right"}}> <img src={endlogo} alt="" /></div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default End;