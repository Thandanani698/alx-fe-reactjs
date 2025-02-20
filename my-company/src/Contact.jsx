import React, { useState } from "react";

const Contact = () => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Message Sent: ${message}`);
    setMessage("");
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          style={{ width: "80%", height: "100px", padding: "10px" }}
          placeholder="Write your message here..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <br />
        <button type="submit" style={{ marginTop: "10px", padding: "10px" }}>
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
