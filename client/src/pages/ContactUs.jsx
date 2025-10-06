import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./ContactUs.css";
import "aos/dist/aos.css";


const ContactUs = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({
    loading: false,
    success: null,
    message: "",
  });

  // === Validation ===
  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.email.trim()) errs.email = "Email is required";
    else if (!/^\S+@\S+\.\S+$/.test(form.email))
      errs.email = "Enter a valid email";
    if (!form.subject.trim()) errs.subject = "Subject is required";
    if (!form.message.trim()) errs.message = "Message can't be empty";
    else if (form.message.length < 15)
      errs.message = "Message must be at least 15 characters";
    return errs;
  };

  const handleChange = (e) => {
    setForm((s) => ({ ...s, [e.target.name]: e.target.value }));
    setErrors((prev) => ({ ...prev, [e.target.name]: undefined }));
  };

  const resetForm = () => {
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  // === Submit ===
  const handleSubmit = async (e) => {
    e.preventDefault();
    const v = validate();
    if (Object.keys(v).length) {
      setErrors(v);
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    setStatus({ loading: true, success: null, message: "" });

    try {
      // Simulate network delay
      await new Promise((res) => setTimeout(res, 1100));

      setStatus({
        loading: false,
        success: true,
        message: "Message sent! We'll get back to you shortly.",
      });
      resetForm();
    } catch {
      setStatus({
        loading: false,
        success: false,
        message: "Something went wrong. Please try again later.",
      });
    }
  };

  return (
    <div className="contact-page">
      {/* === Hero Section === */}
      <header className="contact-hero" role="banner">
        <Navbar />
        <div className="hero-inner">
          <br />
          <h1>Contact Us</h1>
          <p className="tagline">
            Have a question or want to collaborate? Send us a message — we'd
            love to hear from you.
          </p>
        </div>
        <div className="hero-decor" aria-hidden="true" />
      </header>

      {/* === Main Content === */}
      <main className="contact-main" role="main">
        <section className="contact-grid">
          {/* Left Info Card */}
          <div className="contact-card contact-info" data-animate>
            <h2>Get in touch</h2>
            <p>
              Reach our team via email or use the contact form. We normally
              respond within 24–48 hours.
            </p>

            <ul className="contact-list" aria-label="Contact information">
              <li>
                <strong>Email:</strong>{" "}
                <a href="mailto:support@stageonex.com">
                  support@stageonex.com
                </a>
              </li>
              <li>
                <strong>Phone:</strong>{" "}
                <a href="tel:+94112223344">+94 11 222 3344</a>
              </li>
              <li>
                <strong>Office:</strong> Colombo, Sri Lanka
              </li>
            </ul>

            <div className="map-placeholder" aria-hidden="true">
              <div className="map-box">Map placeholder</div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-card contact-form" data-animate>
            {status.success === true && (
              <div className="form-alert success" role="status">
                ✅ {status.message}
              </div>
            )}
            {status.success === false && (
              <div className="form-alert error" role="alert">
                ⚠️ {status.message}
              </div>
            )}

            <form
              onSubmit={handleSubmit}
              noValidate
              aria-labelledby="contact-form-title"
            >
              <h2 id="contact-form-title">Send a message</h2>

              <label className="field">
                <span className="field-label">Full name</span>
                <input
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "err-name" : undefined}
                  required
                />
                {errors.name && (
                  <div id="err-name" className="field-error">
                    {errors.name}
                  </div>
                )}
              </label>

              <label className="field">
                <span className="field-label">Email</span>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "err-email" : undefined}
                  required
                />
                {errors.email && (
                  <div id="err-email" className="field-error">
                    {errors.email}
                  </div>
                )}
              </label>

              <label className="field">
                <span className="field-label">Subject</span>
                <input
                  name="subject"
                  type="text"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="What's this about?"
                  aria-invalid={!!errors.subject}
                  aria-describedby={errors.subject ? "err-subject" : undefined}
                  required
                />
                {errors.subject && (
                  <div id="err-subject" className="field-error">
                    {errors.subject}
                  </div>
                )}
              </label>

              <label className="field">
                <span className="field-label">Message</span>
                <textarea
                  name="message"
                  rows="6"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us what's happening..."
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? "err-message" : undefined}
                  required
                />
                {errors.message && (
                  <div id="err-message" className="field-error">
                    {errors.message}
                  </div>
                )}
              </label>

              <div className="form-actions">
                <button
                  type="submit"
                  className="btn-submit"
                  disabled={status.loading}
                  aria-busy={status.loading ? "true" : "false"}
                >
                  {status.loading ? (
                    <span className="spinner" aria-hidden="true"></span>
                  ) : (
                    "Send Message"
                  )}
                </button>

                <button
                  type="button"
                  className="btn-ghost"
                  onClick={() => {
                    resetForm();
                    setErrors({});
                    setStatus({ loading: false, success: null, message: "" });
                  }}
                >
                  Reset
                </button>
              </div>
            </form>

            <p className="privacy-note">
              We respect your privacy. Your message will only be used to respond
              to your inquiry.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ContactUs;
