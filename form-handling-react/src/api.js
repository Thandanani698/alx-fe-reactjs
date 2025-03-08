export const submitRegistration = async (values) => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });
    return response.json();
  } catch (error) {
    throw new Error("Registration failed");
  }
};
