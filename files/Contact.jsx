import React, { useState } from "react";
import TextGenerateEffectDemo from "../src/components/ui/texts";
import "./contact.css";
import Footer from '../ui/footer';

export default function ContactUs() {
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [formStatus, setFormStatus] = useState("");

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = { name, email, message };

    try {
      const response = await fetch("https://formspree.io/f/xnnplkpl", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormStatus("Message sent successfully!");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setFormStatus("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setFormStatus("Error sending message.");
    }
  };

  return (
    <div className="car-bike-wrapper">
      <h1 className="car-bike-head">Let's Connect 🤝</h1>
      <p className="car-bike-subtext">
        <TextGenerateEffectDemo />
      </p>

      <div className="car-bike-toggle">
        <button onClick={toggleForm} className="toggle-form-button">
          {showForm ? "Hide Form" : "Message Me"}
        </button>
      </div>

      {showForm && (
        <form className="car-bike-form" onSubmit={handleSubmit}>
          <div className="car-bike-left">
            <input
              type="text"
              placeholder="Your Name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Your Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="car-bike-right">
            <textarea
              placeholder="Your Message"
              rows="6"
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <div className="car-bike-submit">
            <button type="submit">Send Message</button>
          </div>
          {formStatus && <p className="form-status">{formStatus}</p>}
        </form>
      )}

      <div className="car-bike-next">
        <h2>What Happens Next? 📬</h2>
        <div className="car-bike-steps-list">
          <div className="car-bike-step">
            <span className="car-bike-dot">1</span>
            <p><strong>You hit send</strong> — your message lands in my inbox</p>
          </div>
          <div className="car-bike-step">
            <span className="car-bike-dot">2</span>
            <p><strong>I reply within 24 hours</strong> with a personalized response</p>
          </div>
          <div className="car-bike-step">
            <span className="car-bike-dot">3</span>
            <p><strong>We chat</strong> about your goals, vision, and how I can help</p>
          </div>
          <div className="car-bike-step">
            <span className="car-bike-dot">4</span>
            <p><strong>Let’s build it!</strong> Your idea becomes reality 🚀</p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
