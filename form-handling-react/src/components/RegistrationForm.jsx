import React, { useState } from 'react';

const RegistrationForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Basic validation logic
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !email || !password) {
      setError('All fields are required');
      return;
    }
    setError('');
    // Perform form submission here (e.g., API request)
    console.log({ username, email, password });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input
          type="text"
          value={username} // bind the value to the state
          onChange={(e) => setUsername(e.target.value)} // update state on change
        />
      </div>

      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email} // bind the value to the state
          onChange={(e) => setEmail(e.target.value)} // update state on change
        />
      </div>

      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password} // bind the value to the state
          onChange={(e) => setPassword(e.target.value)} // update state on change
        />
      </div>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <button type="submit">Submit</button>
    </form>
  );
};

export default RegistrationForm;
