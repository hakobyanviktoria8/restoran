import React from "react";
import { Container, Row, Col } from 'reactstrap';
import "./Contact.css";
import {SlackMessage} from "./SlackMessage";
import address from "./address.png";
import phone from "./phone.png";
import gmail from "./gmail.png";
import facebook from "./facebook.png";
import instagram from "./icons8-instagram-30.png";
import pinterest from "./pinterest.png";
import twitter from "./twitter.png";

export function Contact(props) {
    return(
        <Container>
            <Row>
                <Col xs="12" sm="12" md="12" lg="12" xl="12">
                    <h1 className={"text-center my-3"}>CONTACT</h1>
                </Col>
            </Row>
            <Row className={"formContact"}>
                <Col xs="12" sm="10" md="6" lg="6" xl="6" className={"formCol"}>
                    <SlackMessage/>
                </Col>
                <Col xs="12" sm="10" md="6" lg="6" xl="6" className={"p-5"}>
                    <div className="addres">
                        <img src={address} />
                        <span className="ml-4">25 apt. 1b. S. About 101 Cookbooks</span>
                    </div>
                    <div className="mt-2 phone">
                        <img src={phone} />
                        <span className="ml-4">(+345 ) 3456 - 6333 - 518</span>
                    </div>
                    <div className="mt-2 gmail">
                        <img src={gmail} />
                        <span className="ml-4">kevin@closetcooking.com</span>
                    </div>
                    <div className={"my-4"}>
                        <a className={"mx-2"} href="https://www.facebook.com/ClosetCooking"><img src={facebook} alt=""/> </a>
                        <a className={"mx-2"} href="https://www.instagram.com/closetcooking/"><img src={instagram} alt=""/> </a>
                        <a className={"mx-2"} href="https://www.pinterest.ca/ClosetCooking/"> <img src={pinterest} alt=""/></a>
                        <a className={"mx-2"} href="https://twitter.com/ClosetCooking"> <img src={twitter} alt=""/></a>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col xs="12" sm="12" md="12" lg="12" xl="12" className={"colAbout"}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.1047967696263!2d44.50373355076962!3d40.184481179291666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406abd029d3ca463%3A0x1794cb21378cdc01!2sMartiros%20Saryan%20St%2C%20Yerevan%2C%20Armenia!5e0!3m2!1sen!2s!4v1594057036665!5m2!1sen!2s"
                        width="100%" height="400" frameBorder="0" style={{border:0}} allowFullScreen="" aria-hidden="false"
                        tabIndex="0">
                    </iframe>
                </Col>
            </Row>
        </Container>
    )
}
