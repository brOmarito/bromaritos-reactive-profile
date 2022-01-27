import React, { useEffect, useState } from 'react'
import { Form, Button } from 'react-bootstrap';
// CSS
import '../css/contactme.css';

export default function ContactMe({ currPage, setCurrPage }) {
    const [nameValidated, setNameValidated] = useState(false);
    const [emailValidated, setEmailValidated] = useState(false);
    const [messageValidated, setMessageValidated] = useState(false);
    const [buttonDisabled, setButtonDisabled] = useState(true);

    useEffect(() => {
        if (nameValidated && emailValidated && messageValidated) setButtonDisabled(false);
        else setButtonDisabled(true);
    }, [nameValidated, emailValidated, messageValidated]);

    const handleTextCheck = (setter, value, textId) => {
        if (value && value.length > 1) handleFieldSuccess(setter, textId);
        else handleFieldError(setter, textId);
    }

    const handleFieldError = (setter, textId) => {
        setter(false);
        document.getElementById(textId).classList.remove('hidden');
    }

    const handleFieldSuccess = (setter, textId) => {
        setter(true);
        document.getElementById(textId).classList.add('hidden');
    }

    const handleNameChange = (e) => {
        handleTextCheck(setNameValidated, e.target.value, 'name-error');
    }

    const handleMessageCheck = (e) => {
        handleTextCheck(setMessageValidated, e.target.value, 'message-error');
    }

    const handleEmailCheck = (e) => {
        const reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (e.target.value && reg.test(String(e.target.value).toLowerCase())) handleFieldSuccess(setEmailValidated, 'email-error');
        else handleFieldError(setEmailValidated, 'email-error');
    }
    // `/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/`

    return <div className='container contact-me-content'>
        <div className='form-container'>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="input" placeholder="Please enter your first and last name" onChange={handleNameChange} />
                    <Form.Text id='name-error' className="text-error hidden">
                        Please enter a value for the name field
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onChange={handleEmailCheck} />
                    <Form.Text id='email-error' className="text-error hidden">
                        Please enter a valid email address
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicMessage">
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" placeholder="Your message here" onChange={handleMessageCheck} />
                    <Form.Text id='message-error' className="text-error hidden">
                        Please enter a value for the message field
                    </Form.Text>
                </Form.Group>
                <Button variant="primary" type="submit" disabled={buttonDisabled}>
                    Submit
                </Button>
            </Form>
        </div>
    </div>
}