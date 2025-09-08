import React from "react";
import { Link } from "react-router-dom";   // ✅ import Link here
import { candidates } from "../data";
import CandidateRating from "./CandidateRating";

const ResultElection = ({ id, title, thumbnail }) => {
  const electionCandidates = candidates.filter(
    (candidate) => candidate.election === id
  );

  const totalVotes = electionCandidates.reduce(
    (acc, curr) => acc + curr.voteCount,
    0
  );

  return (
    <article className="result">
      <div className="result_header">
        <h4>{title}</h4>
        <div className="result_header-image">
          <img src={thumbnail} alt={title} />
        </div>
      </div>

      <ul className="result_list">
        {electionCandidates.map((candidate) => (
          <CandidateRating
            key={candidate.id}
            name={candidate.name}
            image={candidate.image}
            voteCount={candidate.voteCount}
            totalVotes={totalVotes}
          />
        ))}
      </ul>
      <Link to={`/elections/${id}/candidates`} className="btn primary full">
        Enter Election
      </Link>
    </article>
  );
};

export default ResultElection;
