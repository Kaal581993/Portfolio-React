import React, { useState } from "react";

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
  message: string;
}

const Contact: React.FC = () => {
  const [values, setValues] = useState<FormValues>({
    firstName: "",
    lastName: "",
    email: "",
    gender: "",
    message: "",
  });

  const [errors, setErrors] = useState<Partial<FormValues>>({});
  const [submitted, setSubmitted] = useState(false);

  // Handle input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  // Validate inputs
  const validate = (): boolean => {
    let tempErrors: Partial<FormValues> = {};

    if (!values.firstName.trim()) tempErrors.firstName = "First name is required";
    if (!values.lastName.trim()) tempErrors.lastName = "Last name is required";

    if (!values.email) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      tempErrors.email = "Invalid email address";
    }

    if (!values.gender) tempErrors.gender = "Please select your gender";
    if (!values.message.trim()) tempErrors.message = "Message cannot be empty";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  // Handle form submit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
      // Netlify will handle submission
    }
  };

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
          onSubmit={handleSubmit}
        >
          {/* Netlify hidden inputs */}
          <input type="hidden" name="form-name" value="contact" />
          <p hidden>
            <label>
              Don’t fill this out: <input name="bot-field" />
            </label>
          </p>

          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={values.firstName}
            onChange={handleChange}
          />
          {errors.firstName && <p className="error">{errors.firstName}</p>}

          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={values.lastName}
            onChange={handleChange}
          />
          {errors.lastName && <p className="error">{errors.lastName}</p>}

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p className="error">{errors.email}</p>}

          <select
            name="gender"
            value={values.gender}
            onChange={handleChange}
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="non-binary">Non-Binary</option>
            <option value="trans-male">Transmale</option>
            <option value="trans-female">Transfemale</option>
          </select>
          {errors.gender && <p className="error">{errors.gender}</p>}

          <textarea
            name="message"
            placeholder="Your Message"
            value={values.message}
            onChange={handleChange}
          ></textarea>
          {errors.message && <p className="error">{errors.message}</p>}

          <button type="submit" className="form-button">
            Submit
          </button>

          {submitted && <p className="success">Thanks! Your message has been sent.</p>}
        </form>
      </div>
    </div>
  );
};

export default Contact;
