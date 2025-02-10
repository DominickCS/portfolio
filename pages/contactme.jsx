import React from 'react';
import styles from '/styles/contactme.module.css';
import Navbar from '/components/navbar.jsx';

function ContactMe() {
  return(
    <div>
      <Navbar />
      <h1>Get in Touch!</h1>
      <div className={styles.contactContainer}>
  <form className={styles.contactForm}>
      <input name="fullName" placeholder="full name"/>
      <input name="emailAddress" placeholder="email address"/>
      <textarea rows="24" cols="96" name="emailBodyInquiry" placeholder="Inquiry"  />
      <button type="submit">Submit</button>
  </form>
      </div>
    </div>
  );
}

export default ContactMe;
