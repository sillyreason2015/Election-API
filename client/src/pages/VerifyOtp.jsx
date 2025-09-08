import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const VerifyOtp = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [otpData, setOtpData] = useState({
    email: location.state?.email || "",
    token: "",
  });
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [cooldown, setCooldown] = useState(0);

  const changeHandler = (e) => {
    setOtpData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    // Frontend-only simulation of OTP verification
    setTimeout(() => {
      setLoading(false);
      // Here we just assume any token is valid
      setMessage("✅ OTP verified successfully!");
      // Redirect to login after 1 second
      setTimeout(() => navigate("/"), 1000);
    }, 500);
  };

  const resendHandler = () => {
    setLoading(true);
    setMessage("");

    // Frontend-only simulation of resending OTP
    setTimeout(() => {
      setLoading(false);
      setMessage(`📧 A new OTP has been sent to ${otpData.email}.`);
      setCooldown(120); // 2-minute cooldown
    }, 500);
  };

  // Cooldown timer
  useEffect(() => {
    if (cooldown > 0) {
      const timer = setInterval(() => setCooldown((prev) => prev - 1), 1000);
      return () => clearInterval(timer);
    }
  }, [cooldown]);

  return (
    <section className="verify">
      <div className="verify_container">
        <h2>Verify OTP</h2>
        {message && <p className="form_error-message">{message}</p>}

        <form onSubmit={submitHandler}>
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={otpData.email}
            onChange={changeHandler}
            required
            readOnly
          />
          <input
            type="text"
            name="token"
            placeholder="Enter OTP Token"
            value={otpData.token}
            onChange={changeHandler}
            required
          />
          <button type="submit" className="btn primary" disabled={loading}>
            {loading ? "Verifying..." : "Verify"}
          </button>
        </form>

        <button
          type="button"
          className="btn sm"
          style={{ marginTop: "1rem" }}
          onClick={resendHandler}
          disabled={loading || cooldown > 0}
        >
          {cooldown > 0
            ? `Resend OTP (${cooldown}s)`
            : loading
            ? "Resending..."
            : "Resend OTP"}
        </button>
      </div>
    </section>
  );
};

export default VerifyOtp;
