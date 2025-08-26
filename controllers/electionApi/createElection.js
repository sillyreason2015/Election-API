import Election from "../../schema/electionSchema.js";

export const createElection = async (req, res) => {
  const { isAdmin } = req.user;

  if (!isAdmin) {
    return res.status(400).json({ message: "You are not authorized to carry out this action" });
  }

  try {
    const { title, startDate, endDate } = req.body;

    if (!title || !startDate || !endDate) {
      return res.status(400).json({ message: "All fields are required" });
    }

    if (new Date(startDate) >= new Date(endDate)) {
      return res.status(400).json({ message: "Start date must be before end date" });
    }

    const election = new Election({
      title,
      startDate: new Date(startDate),
      endDate: new Date(endDate),
      candidateId: [],
    });

    await election.save();

    res.status(200).json({ message: "Election created successfully", election });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
