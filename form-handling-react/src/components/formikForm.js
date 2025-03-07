import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useState } from "react";

const validationSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
});

const FormikForm = () => {
  const [message, setMessage] = useState("");

  return (
    <Formik
      initialValues={{ username: "", email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={async (values, { setSubmitting }) => {
        try {
          const response = await axios.post("https://reqres.in/api/register", {
            email: values.email,
            password: values.password,
          });
          setMessage(`Success! User ID: ${response.data.id}`);
        } catch (error) {
          setMessage("Registration failed. Try again.");
        }
        setSubmitting(false);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <div>
            <label>Username:</label>
            <Field type="text" name="username" />
            <ErrorMessage name="username" component="p" style={{ color: "red" }} />
          </div>
          <div>
            <label>Email:</label>
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="p" style={{ color: "red" }} />
          </div>
          <div>
            <label>Password:</label>
            <Field type="password" name="password" />
            <ErrorMessage name="password" component="p" style={{ color: "red" }} />
          </div>
          <button type="submit" disabled={isSubmitting}>Register</button>
          {message && <p>{message}</p>}
        </Form>
      )}
    </Formik>
  );
};

export default FormikForm;
