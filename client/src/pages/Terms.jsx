import React, { useEffect } from "react";
import Navbar from "../components/Navbar";

import AOS from "aos";
import "aos/dist/aos.css";
import "./Terms.css";

const Terms = () => {
  useEffect(() => {
    // Initialize AOS animations
    AOS.init({ duration: 1000, once: true });

    // Handle mouse light movement
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      document.documentElement.style.setProperty("--x", `${x}%`);
      document.documentElement.style.setProperty("--y", `${y}%`);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="terms-page">
      <Navbar />
      <section className="terms-section">
        <h1 className="terms-title" data-aos="fade-down">
          Terms & Conditions
        </h1>
        <p className="terms-subtitle" data-aos="fade-up">
          Please read our terms and conditions carefully before using our
          services.
        </p>

        <div className="terms-container" data-aos="fade-up">
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing or using our website, you agree to comply with and be
            bound by these Terms and Conditions. If you do not agree, please do
            not use the website.
          </p>

          <h2>2. Use of the Website</h2>
          <p>
            You agree to use the website only for lawful purposes. You are not
            permitted to use it in any way that could damage, disable, or impair
            the website.
          </p>

          <h2>3. Intellectual Property</h2>
          <p>
            All content, logos, graphics, and materials are the property of the
            company. Unauthorized reproduction or distribution is strictly
            prohibited.
          </p>

          <h2>4. Privacy Policy</h2>
          <p>
            We value your privacy. Personal information collected will be used
            according to our Privacy Policy.
          </p>

          <h2>5. Limitation of Liability</h2>
          <p>
            We are not responsible for any damages that arise from your use or
            inability to use our website or services.
          </p>

          <h2>6. Changes to Terms</h2>
          <p>
            We reserve the right to update these Terms & Conditions at any time
            without prior notice.
          </p>

          <h2>7. Contact Us</h2>
          <p>
            If you have any questions about these Terms, please contact us via
            the Contact page.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Terms;