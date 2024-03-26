import emailjs from '@emailjs/browser';
import React, { useRef, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import './Contact.css';
import Social from './Social';

const Contact = () => {
  const form = useRef();
  const [done, setDone] = useState(false)
  const [notDone, setNotDone] = useState(false)
  const [formData, setFormData] = useState({});
    const [ setErrorMessage] = useState('');

    const handleChange = (e) => {
      setFormData({...formData, [e.target.name] : e.target.value})
      setDone(false)
      setNotDone(false)
  }
    
    const sendEmail = (e) => {
        e.preventDefault();

        // Basic validation
        if (!formData.from_name || !formData.reply_to || !formData.message) {
            setErrorMessage("Please fill all the fields.");
            return;
        }

        emailjs.sendForm(
            'service_qc338hh',
            'template_uoo7cdh',
            form.current,
            'ermuYzQ7v_hUzXObQ'
        ).then(
            (result) => {
                console.log(result.text);
                setDone(true);
                form.current.reset();
                setFormData({});
                setTimeout(() => {
                    setDone("");
                    setErrorMessage(''); 
                }, 15000); 
            
            },
            (error) => {
                console.log(error.text);
                setErrorMessage("Failed to send message. Please try again.");
            }
        );
    };

    return (
        <Container style={{ paddingTop: '120px' }}>
            <Row>
                <Col md={6} className="c-left">
                    <h1>Get in Touch</h1>
                    <br />
                    <h1 className="yellow">Contact me</h1>
                    <p> amarduttupadhyay@gmail.com </p>
                </Col>
                <Col md={6} className="c-right">
                <form ref={form} onSubmit={sendEmail}>
                <input type="text" name="from_name" className="user"  placeholder="Name" onChange={handleChange}/>
                <input type="email" name="reply_to" className="user" placeholder="Email" onChange={handleChange} />
                <textarea name="message" className="user" placeholder="Message" onChange={handleChange} />
                <span className='not-done' >{notDone && "Please, fill all the input field"}</span>
                <Button type="submit" className="button" disabled={done}>Send</Button>
                <span className='done'>{done && "Thanks for contacting me and be sure i have recieved your email. If you are testing this functionality then i am confirming this thing working perfectly fine. If you have any serious query then i will reply. Also if you need me, you can conatct me on Linkedin."}</span>
                </form>
            </Col>
            </Row>
            <Social />
        </Container>
    );
};

export default Contact;
