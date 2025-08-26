import cron from "node-cron";
import User from "../schema/userSchema.js";
import Election from "../schema/electionSchema.js";
import { sendMail } from "../utility/sendMail.js";

// Cleanup job every 15 minutes
cron.schedule("*/15 * * * *", async () => {
  try {
    console.log("[CRON] Running cleanup job at", new Date().toISOString());
    const now = new Date();
    const result = await User.deleteMany({
      isVerified: false,
      otpExpires: { $lt: now },
    });

    if (result.deletedCount > 0) {
      console.log(`[CRON] Deleted ${result.deletedCount} unverified users`);
    }
  } catch (error) {
    console.error("[CRON ERROR] Cleanup failed:", error);
  }
});


// Schedule results dynamically for all elections that have not sent results yet
const schedulePendingElectionResults = async () => {
  const now = new Date();
  const pendingElections = await Election.find({
    endDate: { $gt: now },
  });

  pendingElections.forEach(election => {
    const delay = new Date(election.endDate) - now;
    setTimeout(() => sendElectionResults(election), delay);
    console.log(`[SCHEDULER] Scheduled results for election "${election.title}" in ${delay} ms`);
  });
};

// Run on server start
schedulePendingElectionResults();

// Optional: run every hour to catch any new elections created after server start
cron.schedule("0 * * * *", schedulePendingElectionResults, {
  timezone: "Africa/Lagos"
});
