import React from 'react'
import {candidates as dummyCandidates} from '../data'
import {useParams} from 'react-router-dom'
import Candidate from '../components/Candidate'
import ConfirmVote from '../components/ConfirmVote'
import { useSelector } from 'react-redux'

const Candidates = () => {
const {id} = useParams()

const voteCandidateModalShowing = useSelector(state=> state.ui.voteCandidateModalShowing)

const candidates = dummyCandidates.filter(candidate => candidate.election  === id)

  return (
    <>
    <section className="candidates">
      <header className="candidates_header">
        <h1>Vote</h1>
        <p>These are the candidates from the selected elections. Please vote once and wisely, because you won't be allowed to vote again in this election.</p>
      </header>
      <div className="container candidates_container">
        {
          candidates.map(candidate => <Candidate key = {candidate.id} {...candidate}/>)
        }
      </div>
    </section>
 
   {voteCandidateModalShowing && <ConfirmVote/> } 
    </>
  )
}

export default Candidates