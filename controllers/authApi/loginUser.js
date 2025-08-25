import User from "../../schema/userSchema.js";
import bcrypt from 'bcrypt'
import { sendMail } from "../../utility/sendMail.js";
import genToken from "../../jwt/genToken.js";

export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email and Password Required" });
  }

  try {
    const user = await User.findOne({ email: email.toLowerCase() });
    if (!user) {
      return res
        .status(404)
        .json({ message: "This user does not exist. Please Register to continue" });
    }

    if (!user.isVerified) {
      return res.status(400).json({ message: "Please Verify OTP before login" });
    }

    const comparePassword = await bcrypt.compare(password, user.password);
    console.log("Password Match:", comparePassword);

    if (!comparePassword) {
      return res.status(400).json({ message: "Invalid login credentials" });
    }

    // Send login notification email
    await sendMail({
      mailFrom: process.env.EMAIL_USER,
      mailTo: email,
      subject: "Login Successful",
      body: `Hi. You just logged into your account. If this wasn't you, please reply to this email.`,
    });

    const token = genToken({ userId: user._id });

    return res
      .cookie("token", token, {
        httpOnly: true,
        sameSite: "strict",
        secure: false, // change to true in production
        path: "/",
      })
      .status(200)
      .json({ message: "Login Successful", token });
  } catch (error) {
    console.error("Login Error:", error);
    res.status(500).json({ message: error.message });
  }
};
