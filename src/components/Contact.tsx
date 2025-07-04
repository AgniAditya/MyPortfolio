import React, { useRef, useState } from 'react';
import '../assets/styles/Contact.scss';
// import emailjs from '@emailjs/browser';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

function Contact() {

  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const [nameError, setNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<boolean>(false);

  const form = useRef<HTMLFormElement>(null);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log('Name change:', e.target.value);
    setName(e.target.value);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log('Email change:', e.target.value);
    setEmail(e.target.value);
  };

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    console.log('Message change:', e.target.value);
    setMessage(e.target.value);
  };

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
  
    const hasError = {
      name: name.trim() === '',
      email: email.trim() === '',
      message: message.trim() === '',
    };
  
    setNameError(hasError.name);
    setEmailError(hasError.email);
    setMessageError(hasError.message);
  
    if (hasError.name || hasError.email || hasError.message) return;
  
    const formData = {
      name,
      email,
      message,
    };
  
    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbxv5L_LvmxOk9YSx6Rj5NjBdst_IzelZmxede1GwUka8kSA79xQXylmDehC1t7fJSLg/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
  
      const result = await response.json();
  
      if (result.result === "success") {
        alert("Your message has been sent and stored successfully!");
        setName('');
        setEmail('');
        setMessage('');
        setNameError(false);
        setEmailError(false);
        setMessageError(false);
      } else {
        alert("There was an issue submitting the form. Please try again.");
      }
    } catch (error) {
      console.error("Form submission error:", error);
    }
  };
  

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          <p>Got a project waiting to be realized? Let's collaborate and make it happen!</p>
          <Box
            ref={form}
            component="form"
            noValidate
            autoComplete="off"
            className='contact-form'
          >
            <div className='form-flex'>
              <div className="input-group">
                <label htmlFor="name-field">Your Name</label>
                <input
                  type="text"
                  id="name-field"
                  placeholder="What's your name?"
                  value={name}
                  onChange={handleNameChange}
                  className={nameError ? 'error' : ''}
                />
                {nameError && <span className="error-text">Please enter your name</span>}
              </div>
              <div className="input-group">
                <label htmlFor="email-field">Email / Phone</label>
                <input
                  type="text"
                  id="email-field"
                  placeholder="How can I reach you?"
                  value={email}
                  onChange={handleEmailChange}
                  className={emailError ? 'error' : ''}
                />
                {emailError && <span className="error-text">Please enter your email or phone number</span>}
              </div>
            </div>
            <div className="input-group">
              <label htmlFor="message-field">Message</label>
              <textarea
                id="message-field"
                placeholder="Send me any inquiries or questions"
                rows={10}
                value={message}
                onChange={handleMessageChange}
                className={messageError ? 'error' : ''}
              />
              {messageError && <span className="error-text">Please enter the message</span>}
            </div>
            <Button variant="contained" endIcon={<SendIcon />} onClick={sendEmail}>
              Send
            </Button>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Contact;