import React from 'react';
import { Container, Nav, Navbar,Row,Col} from 'react-bootstrap';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight} from '@fortawesome/free-solid-svg-icons';
import img1 from "../../Pages/images/Abstract Circle 1.png";
import img2 from "../../Pages/images/Cloud_database_SVG 1.png";
import img3 from "../../Pages/images/security_SVG 1.png";
import AppDownload from '../../App/AppDownload';
import Subscribe from '../Subscribe/Subscribe';
import Footer from '../Footer/Footer';
import End from '../End/End';
import Features from '../../Features/Features';

const Header = () => {
    return (
        <div>
          <Navbar collapseOnSelect expand="lg" className="infobg" >
  <Container>
  <Navbar.Brand className="brnd d-flex" href="#home"><img src={img1} alt="" className="w-25 mr-2"/> Insignia</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="m-auto">
      <Nav.Link className="text-white ms-5 navFont hover-underline-animation mt-2" href="#about">About</Nav.Link>
      <Nav.Link className="text-white ms-5 navFont hover-underline-animation mt-2" href="#help">Help</Nav.Link>
      <Nav.Link className="text-white ms-5 navFont hover-underline-animation mt-2" href="#features">Features</Nav.Link>
      <Nav.Link className="text-white ms-5 navFont hover-underline-animation mt-2" href="#signup">Sign Up</Nav.Link>
      <button className="ms-5 m-auto bttn1">Request Demo <span className="arr"><FontAwesomeIcon icon={faArrowRight}/> </span></button>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
<Container>
                <div className="infobg">
                <Row className="d-flex justify-content-center align-items-center mt-5">
                <Col md={5} xs={12}>
                <h1 style={{textAlign: "left"}} className="headclor">Save your data <br /> storage here.</h1>
                <p style={{textAlign: "left"}}>Insignia is a data storage area that has been
                tested for security, so you can store your data here
                safely but not be afraid of being stolen by others.</p>
               <button  style={{float: "left"}} className="bttn">Learn More</button>
                </Col>


                <Col md={7} xs={12} className="mt-3">
                    <img src={img2} alt="" className="w-50"/>
                </Col>

                  </Row>                                                      
                </div>



                <div>
                  <Container className="mainbody">
                       <Row className="d-flex justify-content-center align-items-center elements">
                       <Col md={6}>
                        <img src={img3} alt="" className="w-75"/>
                        </Col>

                        <Col md={6}>
                          <h2 style={{textAlign: "left"}} className="headclor">We are a high-level <br /> data storage bank</h2>
                          <p style={{textAlign: "left"}} className="mt-4">The place to store various data that you can access at any time 
                          through the internet  and where you can carry it. <br /> 
                          This very flexible storage area has a high level of security. To enter into your own data you must enter the password that you created when you 
                          registered in this Data Warehouse. </p>
                        </Col>
                        </Row>
                  </Container>
                </div>

                <Features></Features>
                <AppDownload></AppDownload>
                <Subscribe></Subscribe>
              
            </Container>
            <hr className="horizonline"/>
            <div className="try">
              <Container>
                  <Row className="d-flex justify-content-center align-items-center elements">
                    <Col md={6} xs={12}>
                      <h2 style={{textAlign: "left"}} className="headclor">Try for free!</h2>
                      <p style={{textAlign: "left"}} className="mt-4">Get limited 1 week free try our features!</p>
                    </Col>


                    <Col md={6} xs={12}>
                      <button className="trybtn1">Learn More</button>
                      <button className="trybtn2 mt-3">Request Demo <span className="arr"><FontAwesomeIcon icon={faArrowRight}/></span></button>
                    </Col>
                  </Row>
              </Container>
            </div>
            <Footer></Footer>
            <End></End>
        </div>
    );
};

export default Header;