import React, { useEffect, useState } from "react";
import { candidates } from "../data";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../store/ui-slice";




const ConfirmVote = () => {
  const [modalCandidate, setModalCandidate] = useState({});

const dispatch = useDispatch()

//close confirm vote modal
const closeCandidateModal = ()=>{
    dispatch(uiActions.closeVoteCandidateModal())
}

//get selected candidates id from redux store

const selectedVoteCandidate = useSelector(state => state.vote.selectedVoteCandidate)

  // Run once when component mounts
  useEffect(() => {
    const fetchCandidate = candidates.find((candidate) => candidate.id === selectedVoteCandidate);
    if (fetchCandidate) {
      setModalCandidate(fetchCandidate);
    }
  }, []);

  return (
    <section className="modal">
      <div className="modal_content confirm_vote-content">
        <h5>Please Confirm Your Vote</h5>
        <div className="confirm_vote-image">
            <img src={modalCandidate.image} alt={modalCandidate.name} />
        </div>
        <h2>{modalCandidate?.name?.length >17 ? modalCandidate?.name.subString(0, 17) + "..." : modalCandidate?.name}</h2>
        <p>{modalCandidate.motto?.length >45 ? modalCandidate?.motto.subString(0, 45) + "..." : modalCandidate?.motto}</p>
        <div className="confirm_vote-cta">
          <button className="btn" onClick={closeCandidateModal}>Cancel</button>
          <button className="btn primary">Confirm</button>
        </div>
      </div>
    </section>
  );
};

export default ConfirmVote;
