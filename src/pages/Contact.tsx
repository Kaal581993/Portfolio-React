import React from "react";

const Contact: React.FC = () => {
  return (
    <div className="contact-container">
      <h1>Contact Me</h1>
      <h3>Need Enquiry or get in touch with Me</h3>
      <div className="contact-form-container">
        <form
          className="contact-form"
          name="contact"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
        >
          {/* Hidden input for Netlify form name */}
          <input type="hidden" name="form-name" value="contact" />
          {/* Honeypot field for bots */}
          <p hidden>
            <label>
              Don’t fill this out: <input name="bot-field" />
            </label>
          </p>

          <input
            type="text"
            name="firstName"
            className="form-text"
            placeholder="First Name"
            required
          />
          <input
            type="text"
            name="lastName"
            className="form-text"
            placeholder="Last Name"
            required
          />
          <input
            type="email"
            name="email"
            className="form-text"
            placeholder="Email"
            required
          />
          <select name="gender" className="select" id="gender" required>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="non-binary">Non-Binary</option>
            <option value="trans-male">Transmale</option>
            <option value="trans-female">Transfemale</option>
          </select>
          <textarea
            name="message"
            className="form-text-box"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="form-button">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
