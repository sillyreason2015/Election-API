import React, { useState, useEffect } from "react";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [cooldown, setCooldown] = useState(0);

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const sendLink = () => {
    if (!email) return;
    setLoading(true);
    setMessage("");

    setTimeout(() => {
      setLoading(false);
      setMessage(`📧 A password reset link has been sent to ${email}.`);
      setCooldown(120); // 2-minute cooldown
    }, 500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendLink();
  };

  // Cooldown timer
  useEffect(() => {
    if (cooldown > 0) {
      const timer = setInterval(() => setCooldown(prev => prev - 1), 1000);
      return () => clearInterval(timer);
    }
  }, [cooldown]);

  return (
    <section className="forgot-password">
      <div className="forgot-password_container">
        <h2>Forgot Password</h2>
        {message && <p className="form_error-message">{message}</p>}

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={email}
            onChange={handleChange}
            required
          />
          <button type="submit" className="btn primary" disabled={loading}>
            {loading ? "Sending..." : "Send Reset Link"}
          </button>
        </form>

        {/* Resend Link button */}
        {message && (
          <button
            type="button"
            className="btn sm"
            style={{ marginTop: "1rem" }}
            onClick={sendLink}
            disabled={loading || cooldown > 0}
          >
            {cooldown > 0 ? `Resend Link (${cooldown}s)` : "Resend Link"}
          </button>
        )}
      </div>
    </section>
  );
};

export default ForgotPassword;
