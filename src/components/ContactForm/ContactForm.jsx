import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { nanoid } from "nanoid";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsSlice";
import "./ContactForm.css";

const ContactForm = () => {
  const dispatch = useDispatch();

  const initialValues = {
    name: "",
    number: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, "Name must be at least 3 characters")
      .required("Name is required"),
    number: Yup.string()
      .matches(/^\d{3}-\d{2}-\d{2}$/, "Number format must be 123-45-67")
      .required("Number is required"),
  });

  const handleSubmit = (values, { resetForm }) => {
    dispatch(addContact({ id: nanoid(), ...values }));
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {() => (
        <Form className="contact-form">
          <div>
            <label>Name</label>
            <Field name="name" type="text" className="form-field" />
            <ErrorMessage
              name="name"
              component="div"
              className="error-message"
            />
          </div>
          <div>
            <label>Number</label>
            <Field name="number" type="text" className="form-field" />
            <ErrorMessage
              name="number"
              component="div"
              className="error-message"
            />
          </div>
          <button type="submit" className="form-button">
            Add contact
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
