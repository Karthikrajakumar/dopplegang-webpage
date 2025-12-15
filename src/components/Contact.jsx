import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [formStatus, setFormStatus] = useState(null); // success | error | null

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setFormStatus(null);

    try {
      const res = await fetch(
        "https://contact-backend-mh9m.onrender.com/api/contact",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      const data = await res.json();

      if (res.ok && data.success) {
        setFormStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        setFormStatus("error");
      }
    } catch (err) {
      console.error(err);
      setFormStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-wrapper" id="contact">
      {/* Blur Ellipses */}
      <span className="contact-ellipse e2"></span>
      <span className="contact-ellipse e3"></span>
      <span className="contact-ellipse e4"></span>
      <span className="contact-ellipse e5"></span>

      {/* Background Brand */}
      <h1 className="contact-bg-brand">DOPPELGANG</h1>

      <h2 className="contact-title">CONTACT US</h2>
      <p className="contact-subtitle">Get In Touch With Our Details</p>

      <div className="contact-card">
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="tel"
            name="phone"
            placeholder="Your Number"
            value={formData.phone}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Additional Details"
            value={formData.message}
            onChange={handleChange}
            required
          />

          {formStatus === "success" && (
            <p className="form-success">Message sent successfully ✅</p>
          )}

          {formStatus === "error" && (
            <p className="form-error">
              Something went wrong. Please try again.
            </p>
          )}

          <button className="btn-submit" type="submit" disabled={loading}>
            {loading ? "SENDING..." : "SUBMIT"}
          </button>
        </form>
      </div>
    </div>
  );
}
