import React from "react";
import { Container, Row, Col } from 'reactstrap';
import "./About.css";
import img from "../Images/img.jpg";

export function About(props) {
    return(
        <Container>
            <Row>
                <Col xs="12" sm="12" md="6" lg="6" xl="6" className={"colAbout"}>
                    <h2>ABOUT US</h2>
                    <br/>
                    <Row>
                        <Col xs="6" sm="6" md="6" lg="6" xl="6">
                            <img className={"aboutImg"} src={img} alt=""/>
                        </Col>
                        <Col xs="5" sm="5" md="5" lg="5" xl="5">
                            <span>What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
                                printing and typesetting industry. Lorem Ipsum has been the
                                industry's standard dummy text ever since the 1500s.
                            </span>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            It is a long established fact that a reader will
                            be distracted by the readable content of a page when
                            looking at its layout. When an  unknown printer took a galley of type and scrambled it to make a
                            type specimen book. It has survived not only five centuries, but
                            also the leap into electronic typesetting, remaining essentially
                            unchanged. It was popularised in the 1960s with the release of
                            Letraset sheets containing Lorem Ipsum passages, and more recently
                            with desktop publishing software like Aldus PageMaker including
                            versions of Lorem Ipsum.
                        </Col>
                    </Row>
                </Col>
                <Col xs="12" sm="12" md="6" lg="6" xl="6" className={"colAbout"}>
                    <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.1047967696263!2d44.50373355076962!3d40.184481179291666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406abd029d3ca463%3A0x1794cb21378cdc01!2sMartiros%20Saryan%20St%2C%20Yerevan%2C%20Armenia!5e0!3m2!1sen!2s!4v1594057036665!5m2!1sen!2s"
                    width="100%" height="550" frameBorder="0" style={{border:0}} allowFullScreen="" aria-hidden="false"
                    tabIndex="0">
                    </iframe>
                </Col>
            </Row>
        </Container>
    )
}