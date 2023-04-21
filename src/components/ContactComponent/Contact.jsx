import React from "react";
import "./contact.css";
import { TfiEmail } from "react-icons/tfi";
import { BsMessenger } from "react-icons/bs";
import { RiWhatsappFill } from "react-icons/ri";
import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm("service_1f0r7nb", "template_i0jb3pc", form.current, "NWJlAQlHX4S1t2Ys2");
    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        {/* Contact Option */}
        <div className="contact__options">
          <article className="contact__option">
            <div className="contact__icon">
              <TfiEmail className="contact__option-icon" />
            </div>
            <h4>Email</h4>
            <h5>adewale.ologbenla@yahoo.com</h5>
            <a href="mailto:adewale.ologbenla@yahoo.com" className="btn" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <div className="contact__icon">
              <RiWhatsappFill className="contact__option-icon" />
            </div>
            <h4>Whatsapp</h4>
            <h5>+234 814 3926 052</h5>
            <a href="https://api.whatsapp.com/send?phone=+2348143926052" className="btn" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <div className="contact__icon">
              <BsMessenger className="contact__option-icon" />
            </div>
            <h4>Messenger</h4>
            <h5>adewale ologbenla</h5>
            <a href="https://m.me/adewale.ologbenla.9" className="btn" target="_blank">
              Send a message
            </a>
          </article>
        </div>
        {/* Contact form */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Full Name" required />
          <input type="text" name="email" placeholder="Your Email" required />
          <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
