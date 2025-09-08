import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const ResetPassword = () => {
  const { token } = useParams(); // get token from route params
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const changeHandler = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setError("");

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setLoading(true);

    // ⬇️ Replace with actual backend call later
    setTimeout(() => {
      console.log("Reset password request:", {
        token,
        newPassword: formData.password,
      });

      setLoading(false);
      navigate("/"); // redirect to login
    }, 1500);
  };

  return (
    <section className="register">
      <div className="register_container">
        <h2>Reset Password</h2>
        <form onSubmit={submitHandler}>
          {error && <p className="form_error-message">{error}</p>}

          <input
            type="password"
            name="password"
            placeholder="New Password"
            value={formData.password}
            onChange={changeHandler}
            required
          />

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={changeHandler}
            required
          />

          <button type="submit" className="btn primary full" disabled={loading}>
            {loading ? "Resetting..." : "Reset Password"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ResetPassword;
