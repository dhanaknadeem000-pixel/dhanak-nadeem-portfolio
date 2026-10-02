import { useRef } from "react";
import emailjs from "@emailjs/browser";
import "../styles/Contact.css";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_6rgcnlh",
        "template_au649mg",
        form.current,
        "SXQZsS9qJp3Q3R5u8"
      )
      .then(
        () => {
          alert("Message sent successfully! ✅");
          e.target.reset();
        },
        (error) => {
          alert("Failed to send message ❌");
          console.log(error.text);
        }
      );
  };

  return (
    <section className="contact" id="contact">
      <h2>Let's Connect</h2>

      <p className="contact-subtitle">
        I'm always open to discussing new projects, creative ideas,
        internships, freelance opportunities, and collaborations.
      </p>

      <div className="contact-container">
        <div className="contact-info">
          <h3>Get In Touch</h3>

          <p className="contact-description">
            Whether you have a project idea, an internship opportunity, or just
            want to connect, feel free to reach out.
          </p>

          <div className="contact-item">
            <h4>📧 Email</h4>
            <a href="mailto:dhanaknadeem000@gmail.com">
              dhanaknadeem000@gmail.com
            </a>
          </div>

          <div className="contact-item">
            <h4>💼 LinkedIn</h4>
            <a
              href="https://www.linkedin.com/in/dhanak-nadeem-a508b033b"
              target="_blank"
              rel="noreferrer"
            >
              Connect with me on LinkedIn
            </a>
          </div>

          <div className="contact-item">
            <h4>📸 Instagram</h4>
            <a
              href="https://www.instagram.com/the.digital.engineer"
              target="_blank"
              rel="noreferrer"
            >
              Follow me on Instagram
            </a>
          </div>

          <div className="contact-item">
            <h4>📍 Location</h4>
            <p>Lahore, Pakistan</p>
          </div>
        </div>

        <div className="contact-form">
          <h3>Send Me a Message</h3>

          <form ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />

            <textarea
              name="message"
              placeholder="Write your message..."
              required
            ></textarea>

            <button type="submit">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;