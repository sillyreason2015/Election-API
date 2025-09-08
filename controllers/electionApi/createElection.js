import Election from "../../schema/electionSchema.js";

export const createElection = async (req, res) => {
  const { isAdmin } = req.user;

  if (!isAdmin) {
    return res.status(400).json({ message: "You are not authorized to carry out this action" });
  }

  try {
    const { title, description, thumbnail } = req.body;

    if (!title || !description || !thumbnail) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const election = new Election({
      title,
      description,
      thumbnail,
      candidateId: [],
    });

    await election.save();

    res.status(200).json({ message: "Election created successfully", election });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
