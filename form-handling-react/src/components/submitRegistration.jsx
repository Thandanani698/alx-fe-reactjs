import { submitRegistration } from './api';

// Inside handleSubmit function in FormikForm
const handleSubmit = async (values) => {
  try {
    const response = await submitRegistration(values);
    console.log('Registration successful:', response);
  } catch (error) {
    console.log('Registration failed:', error);
  }
};
