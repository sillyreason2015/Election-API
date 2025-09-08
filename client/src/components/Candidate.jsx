import React from 'react'
import { uiActions } from '../store/ui-slice'
import { useDispatch } from 'react-redux'
import { voteActions } from '../store/vote-slice'


const Candidate = ({image, id, name}) => {

const dispatch = useDispatch()

//open confirm vote modal
const OpenCandidateModal = ()=>{
    dispatch(uiActions.openVoteCandidateModal())
    dispatch(voteActions.changeSelectedVoteCandidate(id))
}

  return (
    <article className="candidate">
        <div className="candidate_image">
            <img src = {image} alt={name}/>
        </div>
        <h5>{name?.length > 20 ? name.subString(0, 20) + "..." : name}</h5>
        <button className="btn primary" onClick={OpenCandidateModal}>Vote</button>
    </article>
  )
}

export default Candidate