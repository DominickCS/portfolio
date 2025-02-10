import React from 'react';

function ContactMe() {
  return(
  <form>
      <input name="fullName" placeholder="Full name"/>
      <input name="emailAddress" placeholder="email address"/>
      <input name="emailBodyInquiry" placeholder="Inquiry"  />
      <button type="submit">Submit</button>
  </form>
  );
}

export default ContactMe;
