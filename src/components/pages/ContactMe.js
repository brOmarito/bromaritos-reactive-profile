import React, { useEffect, useState } from 'react'
import { Form, Button } from 'react-bootstrap';
import { handleTextCheck, handleEmailCheck } from '../../utils/contactFormHelpers';
// CSS
import '../css/contactme.css';
// img(s)
import spoderman from '../../images/Me-as-Spoderman-cloud.png';

export default function ContactMe({ currPage, setCurrPage }) {
    const [nameValidated, setNameValidated] = useState(false);
    const [emailValidated, setEmailValidated] = useState(false);
    const [messageValidated, setMessageValidated] = useState(false);
    const [buttonDisabled, setButtonDisabled] = useState(true);

    useEffect(() => {
        if (nameValidated && emailValidated && messageValidated) setButtonDisabled(false);
        else setButtonDisabled(true);
    }, [nameValidated, emailValidated, messageValidated]);

    const handleNameChange = (e) => {
        handleTextCheck(setNameValidated, e.target.value, 'name-error');
    }

    const handleMessageCheck = (e) => {
        handleTextCheck(setMessageValidated, e.target.value, 'message-error');
    }

    const handleEmailChange = (e) => {
        handleEmailCheck(setEmailValidated, e.target.value, 'email-error');
    }

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
                    <Form.Control type="email" placeholder="Enter email" onChange={handleEmailChange} />
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
                <Button className='contact-btn' type="submit" disabled={buttonDisabled}>
                    Submit
                </Button>
            </Form>
        </div>
        <div className='contactme-pic-container'>
            <img src={spoderman} alt='Picture of me as Spoderman' />
        </div>
    </div>
}