import React, { useRef } from "react";
import "./Contact.css";
import { MdOutlineMail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ii17afc",
        "template_44ulclf",
        form.current,
        "pde8RMUmQ_sDPX8jR"
      )
      .then(
        (result) => {
          for (let i = 0; i < 3; i++) {
            form.current[i].value = "";
          }
        },
        (error) => {
          console.log(error.text);
          window.alert(error.text);
        }
      );
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2 className="animation-title">Contact Me</h2>

      <div className="container contact-container">
        <div className="contact-options">
          <article className="contact-option">
            <MdOutlineMail className="contact-icon" />
            <h4>Email</h4>
            <h5>redabarakat65@gmail.com</h5>
            <a
              href="mailto:redabarakat65@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Send a Message
            </a>
          </article>
          <article className="contact-option">
            <RiMessengerLine className="contact-icon" />
            <h4>Messanger</h4>
            <h5>Reda Mohamed</h5>
            <a
              href="https://m.me/reda.barakat.5"
              target="_blank"
              rel="noreferrer"
            >
              Send a Message
            </a>
          </article>
          <article className="contact-option">
            <BsWhatsapp className="contact-icon" />
            <h4>Whats App</h4>
            <h5>+2001015689464</h5>
            <a
              href="https://api.whatsapp.com/send?phone=+2001015689464"
              target="_blank"
              rel="noreferrer"
            >
              Send a Message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
