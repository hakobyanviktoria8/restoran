import React, { useState } from "react";
import axios from "axios";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import {makeStyles} from "@material-ui/core/styles/index";
// import { makeStyles } from '@material-ui/core/styles';

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

export function SlackMessage(props) {
    const classes = useStyles();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    async function submitForm(e) {
        e.preventDefault();

        const url = "https://hooks.slack.com/services/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";
        const data = {
            text: `Name: ${name} \n Message: ${message} \n Email: ${email} `,
        };

        let res = await axios.post(url, JSON.stringify(data), {
            withCredentials: false,
            transformRequest: [
                (data, headers) => {
                    delete headers.post["Content-Type"];
                    return data;
                },
            ],
        }
        );

        if (res.status === 200) {
            alert("Your message was successfully sent to.");
            setName("");
            setEmail("");
            setMessage("");
        } else {
            alert("There was an error. Please try again later.");
        }
    }

    return(
        <form className={classes.root} noValidate autoComplete="off">
            <textarea
                style={{width: "100%"}}
                name=""
                id="message"
                placeholder="Write message ..."
                cols="60"
                rows="3"
                value={message}
                onChange={(e) => {setMessage(e.target.value)}}
            />
            <TextField
                value={name}
                onChange={(e) => {setName(e.target.value)}}
                style={{width: "100%"}}
                id="standard-basic"
                label="Your Name"
                type="text"
            />
            <TextField
                style={{width: "100%"}}
                id="standard-basic"
                label="Your Email"
                type="email"
                value={email}
                onChange={(e) => { setEmail(e.target.value) }}
            />
            <Button
                onClick={(e) => submitForm(e)}
                disabled={!email}
                variant="contained"
                color="primary"
                style={{width: "100%"}}
                className={classes.button}
            >
                Send
            </Button>
        </form>
    )
}