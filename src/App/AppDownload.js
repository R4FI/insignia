import React from 'react';
import { Container, Row,Col } from 'react-bootstrap';
import './AppDowload.css';
import img from "../Pages/images/Phone 1.png";
const AppDownload = () => {
    return (
        <div>
           <Container className="appdownlad">
               <Row className="d-flex justify-content-center align-items-center">
                   <Col md={6} >
                        <h2 style={{textAlign: "left"}} className="headclor dload ms-5">Download Our App</h2>
                        <p style={{textAlign: "left"}} className="mt-4 ms-5">The place to store various data that you can access at any time 
                          through the internet  and where you can carry it. <br /> 
                          This very flexible storage area has a high level of security. To enter into your own data you must enter the password that you created when you 
                          registered in this Data Warehouse. </p>
                          <button  style={{float: "left"}} className="bttn ms-5 mb-5">Download</button>
                   </Col>

                   <Col md={6} className="phoneimg">
                    <img src={img} alt="" className="img-fluid mb-5"/>
                   
                         </Col>
               </Row>
               
               
           </Container>
          
          
         
        </div>
    );
};

export default AppDownload;