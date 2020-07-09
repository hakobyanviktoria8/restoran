import React from "react";
import { Container, Row, Col } from 'reactstrap';
import "./About.css";
import img from "../Images/img.jpg";
import certifikat from "./Screenshot_13.jpg";
import myImg from "./Screenshot_1.jpg";

export function About(props) {
    return(
        <Container>
            <Row>
                <Col xs="12" sm="12" md="12" lg="12" xl="12">
                    <h1 className={"my-4 text-center"}>ABOUT US</h1>
                </Col>
            </Row>
            <Row>
                <Col xs="12" sm="12" md="6" lg="6" xl="6" className={"colAbout"}>
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
                        <Col xs="12" sm="12" md="12" lg="12" xl="12">
                            <br/>
                            <div className={"aboutText"}>
                                <b>2008</b> Food Blog Award Winner – Food Blog of the Year <br/>
                                Telegraph.co.uk names 101 Cookbooks one of the 101 most useful websites: “…Enchanting recipe and foodie blog from a Californian cook who believes in good food. Subscribe to the email alert service and transform your cooking repertoire.” (link to full article – 3/30/2008 )
                            </div>
                        </Col>
                    </Row>
                </Col>
                <Col xs="12" sm="12" md="6" lg="6" xl="6" className={"colAbout"}>
                    <h4>Recent Press & Awards </h4>
                    This section is terribly out of date – my apologies! <br/>
                    <b>2007</b> James Beard Foundation Book Awards Nominee – Healthy Focus, Super Natural Cooking <br/>
                    <img className={"certifikat"} src={certifikat} alt=""/>
                    <img className={"myImg"} src={myImg} alt=""/>
                </Col>
            </Row>
            <Row>
                <Col style={{height: "20px"}}>
                    <h3 className={" my-3 text-center"}>Never give up ...!</h3>
                </Col>
            </Row>
        </Container>
    )
}