import Election from "../../schema/electionSchema.js";
import Candidate from "../../schema/candidateSchema.js";
import Vote from "../../schema/voteSchema.js"; 

export const deleteElection = async (req, res) => {
  try {
    const { electionId } = req.params;

    const election = await Election.findById(electionId);
    if (!election) {
      return res.status(404).json({ message: "Election not found" });
    }

    // Delete all candidates linked to this election
    const candidates = await Candidate.find({ election: electionId });

    for (const candidate of candidates) {
      // If you’re storing votes in Vote model, clean them up too
      await Vote.deleteMany({ candidate: candidate._id });
      await candidate.deleteOne();
    }

    // Finally, delete the election
    await election.deleteOne();

    res.status(200).json({ message: "Election and associated data deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};
