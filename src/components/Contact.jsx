import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // success | error | null

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
    setStatus(null);

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
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-wrapper" id="contact">
      <h2
        style={{
          color: "rgba(0, 0, 0, 0.70)",
          WebkitTextStrokeWidth: "1px",
          WebkitTextStrokeColor: "rgba(0, 0, 0, 0.43)",
          fontFamily: "Poppins",
          fontSize: "45px",
          fontWeight: 900,
          textAlign: "center",
        }}
      >
        CONTACT US
      </h2>

      <p className="section-sub">Get In Touch With Our Details</p>

      <div className="contact-card">
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <input
              type="text"
              placeholder="Your Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="form-row">
            <input
              type="email"
              placeholder="Your Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="form-row">
            <input
              type="text"
              placeholder="Your Number"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          <div className="form-row">
            <textarea
              placeholder="Additional Details"
              rows="6"
              name="message"
              value={formData.message}
              onChange={handleChange}
            />
          </div>

          {status === "success" && (
            <p className="form-success">Message sent successfully ✅</p>
          )}

          {status === "error" && (
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
