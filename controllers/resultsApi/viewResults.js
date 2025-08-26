import Election from "../../schema/electionSchema.js";
import Candidate from "../../schema/candidateSchema.js";

export const viewResults = async (req, res) => {
    const { electionId } = req.params;

    try {
        const election = await Election.findById(electionId).populate("candidateId");
        if (!election) {
            return res.status(404).json({ message: "Election not found" });
        }

        const now = new Date();
        if (now < election.endDate) {
            return res.status(403).json({ message: `Election is still ongoing. Results not available yet. Results will be out at ${election.endDate} ` });
        }

        // Build result set with candidate votes
        const results = election.candidateId.map(candidate => ({
            name: candidate.name,
            department: candidate.department,
            votes: candidate.votes
        }));

        res.status(200).json({
            election: election.title,
            endedAt: election.endDate,
            results
        });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
