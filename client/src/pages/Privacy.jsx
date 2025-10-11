import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import AOS from "aos";
import "aos/dist/aos.css";
import "./Privacy.css";

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
    <div className="privacy-page">
        <Navbar />
        <section className="privacy-section">
            <h1 className="privacy-title" data-aos="fade-down">
                Privacy Policy
            </h1>
            <p className="privacy-subtitle" data-aos="fade-up">
                Your privacy is important to us. Please read our privacy policy carefully.
            </p>

            <div className="privacy-container" data-aos="fade-up">
                <h2>1. Information We Collect</h2>
                <p>
                    We collect personal information that you provide to us when you use our services.
                </p>

                <h2>2. Use of Information</h2>
                <p>
                    We use the information we collect to provide and improve our services.
                </p>

                <h2>3. Sharing of Information</h2>
                <p>
                    We do not sell or rent your personal information to third parties.
                </p>

                <h2>4. Data Security</h2>
                <p>
                    We take reasonable measures to protect your personal information from unauthorized access.
                </p>

                <h2>5. Your Rights</h2>
                <p>
                    You have the right to access, correct, or delete your personal information.
                </p>

                <h2>6. Changes to This Policy</h2>
                <p>
                    We may update this Privacy Policy from time to time. We will notify you of any changes.
                </p>

                <h2>7. Contact Us</h2>
                <p>
                    If you have any questions about this Privacy Policy, please contact us via the Contact page.
                </p>
            </div>
        </section>

        <Footer />
    </div>
);
};

export default Terms;