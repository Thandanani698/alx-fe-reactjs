export const submitRegistration = async (formData) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (formData.email === "error@example.com") {
        reject("Registration failed: Email already in use.");
      } else {
        resolve({ message: "User registered successfully!", data: formData });
      }
    }, 1000);
  });
};
