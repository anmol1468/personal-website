import React from 'react'
import styles from './Contact.module.scss'
import { BsLinkedin, BsInstagram } from 'react-icons/bs'
import contact from '../../assets/images/contact.svg'

function Contact() {


  const submitForm = (e) => {
    // e.preventDefault()
  }

  return (
    <div className={styles.contact}>
      <h2>Contact Me</h2>
      <div className={styles.flex}>
      <div className={styles.illustration}>
      <img src={contact} alt="contact-illustration" />

      </div>
      <form action="https://formspree.io/f/mwkjlzjv" onSubmit={submitForm} method="POST">
        <div className="name">
          <h4>Name</h4>
          <input name='Name' type="text" required/>
        </div>
        <div className="email" required>
          <h4>Email Address</h4>
          <input name='Email' type="email" />
        </div>
        <div className="message">
          <h4>Message</h4>
          <textarea name="Message" id="message" cols="30" rows="10" required></textarea>
        </div>
        <button type="submit">Send</button>
      </form>
      </div>
    </div>
  )
}

export default Contact