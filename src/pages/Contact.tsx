import React, { useRef } from "react";
import emailjs from "emailjs-com";

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          "your_service_id",    // from EmailJS dashboard
          "your_template_id",   // from EmailJS dashboard
          form.current,
          "your_public_key"     // from EmailJS account
        )
        .then(
          (result) => {
            alert("Message sent successfully!");
            console.log(result.text);
          },
          (error) => {
            alert("Something went wrong, try again.");
            console.log(error.text);
          }
        );
    }
  };

  return (
    <div className="contact-container">
      <h1>Contact Me</h1>
      <h3>Need Enquiry or get in touch with Me</h3>
      <div className="contact-form-container">
        <form className="contact-form" ref={form} onSubmit={sendEmail}>
          <input type="text" name="firstName" className="form-text" placeholder="First Name" required />
          <input type="text" name="lastName" className="form-text" placeholder="Last Name" required />
          <input type="email" name="email" className="form-text" placeholder="Email" required />
          <select name="gender" className="select" id="gender" required>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="non-binary">Non-Binary</option>
            <option value="trans-male">Transmale</option>
            <option value="trans-female">Transfemale</option>
          </select>
          <textarea name="message" className="form-text-box" placeholder="Your Message" required></textarea>
          <button type="submit" className="form-button">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
