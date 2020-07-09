import React from "react";
import { Container, Row, Col } from 'reactstrap';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import "./Contact.css";
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
    button: {
        margin: theme.spacing(1),
    },
}));

export function Contact(props) {
    const classes = useStyles();

    return(
        <Container>
            <Row>
                <Col xs="12" sm="12" md="12" lg="12" xl="12">
                    <h1 className={"text-center my-3"}>CONTACT</h1>
                </Col>
            </Row>
            <Row className={"formContact"}>
                <Col xs="12" sm="10" md="6" lg="6" xl="6" className={"formCol"}>
                    <form className={classes.root} noValidate autoComplete="off">
                        <textarea value={"Send message ..."} style={{width: "100%"}} name="" id="" cols="60" rows="3"> </textarea>
                        <TextField style={{width: "100%"}} id="standard-basic" label="Nmae" />
                        <TextField style={{width: "100%"}} id="standard-basic" label="Email" />
                        {/*disabled={!input}*/}
                        <Button
                            variant="contained"
                            color="primary"
                            className={classes.button}
                            endIcon={<Icon>send</Icon>}
                        >
                            Send
                        </Button>
                    </form>
                </Col>
                <Col xs="12" sm="10" md="6" lg="6" xl="6">
                    icon
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
