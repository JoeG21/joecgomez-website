import React from 'react';
import { useState } from 'react';

import Modal from '../components/Modal'

import emailjs from 'emailjs-com';

const ContactInfo = () => {
    const [name, setName] = useState('')
    const [subject, setSubject] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [open, setOpen] = useState(false)
    const [sent, setSent] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, e.target, process.env.REACT_APP_USER_ID)
            .then((result) => {
                console.log(result.text);
                e.target.reset();
                setSent(true)
                console.log(name, subject, email, message, 'Thank you!')
            }, (error) => {
                setSent(false)
                console.log(error.text);
            });
    }

    const onClose = () => {
        setOpen(false)
    }

    return (
        <div className='contact-container'>
            <h1> Contact Form </h1>

            <form className="contact-form" onSubmit={e => handleSubmit(e)}>
                <input type="hidden" name="contact_number" />

                <label className='form-label'>Name</label>
                <input type="text" name="name" className='form-field' onChange={e => setName(e.target.value)} required />

                <label className='form-label'>Subject</label>
                <input type="text" name="subject" className='form-field' onChange={e => setSubject(e.target.value)} required />

                <label className='form-label'>Email</label>
                <input type="email" name="email" className='form-field' onChange={e => setEmail(e.target.value)} required />

                <label className='form-label'>Message</label>
                <textarea name="message" className='form-mess' onChange={e => setMessage(e.target.value)} required />


                <div className='send-button-container'>
                    <button type="submit"  className='send-button' onClick={() => setOpen(true)}>
                        Send
                    </button>
                </div>
            </form>

            <Modal open={open} sent={sent} onClose={onClose} />
        </div>
    );
}

export default ContactInfo