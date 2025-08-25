import cron from "node-cron";
import User from "../schema/userSchema.js";

// Runs every 15 minutes
cron.schedule("*/15 * * * *", async () => {
  try {
    const now = new Date();

    const result = await User.deleteMany({
      isVerified: false,
      otpExpires: { $lt: now }, // OTP expired
    });

    if (result.deletedCount > 0) {
      console.log(`[CRON] Deleted ${result.deletedCount} unverified users at ${now.toISOString()}`);
    }
  } catch (error) {
    console.error("[CRON ERROR] Failed to cleanup unverified users:", error);
  }
});
