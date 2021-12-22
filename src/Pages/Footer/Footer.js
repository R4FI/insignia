import React from 'react';
import { Col, Container, Row,NavLink } from 'react-bootstrap';
import img from "../../Pages/images/Abstract Circle 1.png";
import './Footer.css';
import img1 from "../../Pages/images/logo/FacebookLogo.png";
import img2 from "../../Pages/images/logo/TwitterLogo.png";
import img3 from "../../Pages/images/logo/InstagramLogo.png";
const Footer = () => {
    return (
        <div>
            <Container className="foot">
                <Row className="d-flex justify-content-center ">
                    <Col md={3}>
                      <img style={{float: "left"}} src={img} alt="" className="footimg me-3"/>  
                      <h3 style={{textAlign: "left"}} className="headcolor mt-2">Insignia</h3>
                      <p style={{textAlign: "left"}} className="footcolor">Insignia Society, 234 <br />
                        Bahagia Ave Street 
                        PRBW 29281</p>
                      <p style={{textAlign: "left"}} className="mt-5 footcolor">
                      info@insignia.com <br /> 1-232-3434 (Main)
                      </p>
                    
                    </Col>
                           
                    <Col md={3}>
                    <p style={{textAlign: "left"}} className="mt-3 ms-3 headcolor2">About</p> 
                     <NavLink className="aboutlink mt-5" style={{textAlign: "left"}}>Profile </NavLink>
                     <NavLink className="aboutlink mt-2" style={{textAlign: "left"}}>Features</NavLink>
                     <NavLink className="aboutlink mt-2" style={{textAlign: "left"}}>Careers</NavLink>
                     <NavLink className="aboutlink mt-2" style={{textAlign: "left"}}>DW News</NavLink>
                    </Col>


                    <Col md={3}>
                    <p style={{textAlign: "left"}} className="mt-3 ms-3 headcolor2">Help</p> 
                     <NavLink className="aboutlink mt-5" style={{textAlign: "left"}}>Support</NavLink>
                     <NavLink className="aboutlink mt-2" style={{textAlign: "left"}}>Sign Up</NavLink>
                     <NavLink className="aboutlink mt-2" style={{textAlign: "left"}}>Guide</NavLink>
                     <NavLink className="aboutlink mt-2" style={{textAlign: "left"}}>Reports</NavLink>
                     <NavLink className="aboutlink mt-2" style={{textAlign: "left"}}>Q&A</NavLink>
                    </Col>


                    <Col style={{textAlign: "left"}} className="mt-3 headcolor2" md={3}>
                        <p>Social Media</p>
                        <div className="d-flex mt-5">
                        <div className={"logo1"}><img src={img1} alt="" /></div>
                        <div className={"logo2"}><img src={img2} alt="" /></div>
                        <div className={"logo3"}><img src={img3} alt="" /></div>
                        </div>
                    </Col>
                    </Row>
            </Container>
        </div>
    );
};

export default Footer;