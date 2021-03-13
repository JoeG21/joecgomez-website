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
        <>
            <div className='big-container'>
                <div className='contact-container'>
                    <h2> Contact Form </h2>
                    <form className="contact-form" onSubmit={e => handleSubmit(e)}>
                        <input type="hidden" name="contact_number" />

                        <label className='email-label'>Name</label>
                        <input type="text" name="name" className='email-field' onChange={e => setName(e.target.value)} required />

                        <label className='email-label'>Subject</label>
                        <input type="text" name="subject"  className='email-field' onChange={e => setSubject(e.target.value)} required />

                        <label className='email-label'>Email</label>
                        <input type="email" name="email"  className='email-field' onChange={e => setEmail(e.target.value)} required />

                        <label className='email-label'>Message</label>
                        <textarea name="message" className='email-mess' onChange={e => setMessage(e.target.value)} required />

                        <input type="submit" value="Send" className='email-send' onClick={() => setOpen(true)}/>
                    </form>

                    <Modal open={open} sent={sent} onClose={onClose}/>
                </div>
                <br />
            </div>
        </>
    );
}

export default ContactInfo