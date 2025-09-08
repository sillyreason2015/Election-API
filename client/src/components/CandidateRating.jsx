import React from 'react'

const CandidateRating = ({name, image, voteCount, totalVotes}) => {
  return (
    <li className="result_candidate">
        <div className="result_candidate img">
            <img src={image} alt={name}/>
        </div>
        <div className="result_candidate-info">
            <div>
            <h5>{name}</h5>
            <small>{`${voteCount} ${voteCount === 1 ? "vote": "votes"}`}</small>
            </div>
        </div>
        <div className="result_candidate-rating">
            <div className="candidate-loader">
                <span style={{width: `${voteCount> 0 ? ((voteCount/totalVotes) * 100)
                : 0 }%`}}></span>
            </div>
            <small>{`${voteCount> 0 ? ((voteCount/totalVotes) * 100).toFixed(2) : 0 }%`}</small>
        </div>
    </li>
  )
}

export default CandidateRating