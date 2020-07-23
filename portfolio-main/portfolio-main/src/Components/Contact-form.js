import React, { useState } from "react";
import { Formik } from "formik";
import * as emailjs from "emailjs-com";
import Button from "./Button";
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import "./Contact-form.css";

const ContactForm = (props) => {
  const [done, setDone] = useState(false);
  const handleSubmit = (values) => {
    emailjs
      .send("gmail", "template_8ROjn2lO", values, "user_Hn1hO42fTGlyhHZx6mGHO")
      .then((response) =>
        console.log("SUCCESS!", response.status, response.text)
      )
      .catch((error) => console.log("error"));

    emailjs
      .send("gmail", "portfolio_template", values, "user_Hn1hO42fTGlyhHZx6mGHO")
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setDone(true)
      })
      .catch((error) => console.log("error"));
  };

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        subject: "",
        message: "",
      }}
      validate={(values) => {
        const errors = {};
        if (!values.email) {
          errors.email = "Required";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Invalid email address";
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        setSubmitting(true);
        resetForm();
        handleSubmit(values);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <form onSubmit={handleSubmit} className="form-main">
          <div className="contact-form">
            <input
              type="name"
              name="name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
              placeholder="Name"
              variant="outlined"
              className="contact-inputs"
            />

            <input
              type="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              placeholder="Email"
              variant="outlined"
              className="contact-inputs email"
            />
            {errors.email && touched.email && errors.email}

            <textarea
              type="textArea"
              name="message"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.message}
              label="Message"
              variant="outlined"
              multiline
              rows={6}
              placeholder="Message"
              className="contact-input contact-inputs"
            />
            <div className="contact-button-container">
              <Button
                className={`contact-submit-button ${done && "done"} `}
                variant="contained"
                color="primary"
                type="submit"
                disabled={isSubmitting}
              >
                {done ? "Thank you" : "Submit"}
              </Button>
            </div>
          </div>
        </form>
      )}
    </Formik>
  );
};

export default ContactForm;
