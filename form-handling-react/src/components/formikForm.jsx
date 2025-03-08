import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { submitRegistration } from "../api"; // Adjusted import for the api.js file

// Yup validation schema
const validationSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  email: Yup.string().email("Invalid email address").required("Email is required"),
  password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
});

const FormikForm = () => {
  const handleSubmit = async (values, { setSubmitting, setErrors }) => {
    try {
      // Call the submitRegistration function from the API file
      const response = await submitRegistration(values);
      console.log("Registration successful:", response);
      // You can handle success here, like redirecting or showing a success message
    } catch (error) {
      console.log("Registration failed:", error);
      // If registration fails, you can set an error message on the form
      setErrors({ submit: "Registration failed. Please try again." });
    } finally {
      setSubmitting(false); // Always set submitting to false after the request
    }
  };

  return (
    <Formik
      initialValues={{ username: "", email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit} // Use handleSubmit function to process form submission
    >
      {({ isSubmitting, errors }) => (
        <Form>
          <div>
            <label>Username:</label>
            <Field type="text" name="username" />
            <ErrorMessage name="username" component="div" style={{ color: 'red' }} />
          </div>

          <div>
            <label>Email:</label>
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="div" style={{ color: 'red' }} />
          </div>

          <div>
            <label>Password:</label>
            <Field type="password" name="password" />
            <ErrorMessage name="password" component="div" style={{ color: 'red' }} />
          </div>

          {errors.submit && <div style={{ color: 'red' }}>{errors.submit}</div>} {/* Display registration errors */}

          <button type="submit" disabled={isSubmitting}>
            Register
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default FormikForm;
