import React from 'react';
import emailjs from 'emailjs-com';


export default function ContactUs() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_44tjmut', e.target, 'user_5WGr2DLiVqjr97yczh5Jh')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  }

  return (
    <form className="contact-form" onSubmit={sendEmail}>
      <input type="hidden" name="contact_number" />
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
}
