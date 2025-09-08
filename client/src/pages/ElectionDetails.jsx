import React from 'react'
import { elections } from '../data'
import { useParams } from 'react-router-dom'
import { candidates } from '../data'
import { voters } from '../data'
import ElectionCandidate from '../components/ElectionCandidate'
import { IoMdAddCircleOutline } from 'react-icons/io'
import {useDispatch, useSelector} from 'react-redux'
import { uiActions } from '../store/ui-slice'
import AddCandidateModal from '../components/AddCandidateModal'


const ElectionDetails = () => {
  const { id } = useParams()

  const dispatch = useDispatch()

  const currentElection = elections.find(election => election.id === id)

  const electionCandidates = candidates.filter(candidates => candidates.election === id)

  const addCandidateModalShowing = useSelector(state => state.ui.addCandidateModalShowing)


  //open add candidate modal
 const openModal = ()=>{
        dispatch(uiActions.openAddCandidateModal())
  }



  if (!currentElection) {
    return <p>Election not found.</p>
  }

  return (
    <>
    <section className="electionDetails">
      <div className="container electionDetails_container">
        <h2>{currentElection.title}</h2>
        <p>{currentElection.description}</p>

        <div className="electionDetails_image">
          <img
            src={currentElection.thumbnail}
            alt={currentElection.title}
          />
        </div>
        <menu className="electionDetails_candidates">
          {
              electionCandidates.map(candidate => <ElectionCandidate key = {candidate.id} {...candidate}/>)
          }
          <button className="add_candidate-btn" onClick={openModal}><IoMdAddCircleOutline/></button>
        </menu>
        <menu className="voters">
          <h2>Voters</h2>
          <table className="voters_table">
            <thead>
              <tr>
                <th>Full Name</th>
                <th>Email Address</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
              {
                voters.map(voter => <tr key={voter.id}>
                  <td><h5>{voter.name}</h5></td>
                  <td>{voter.email}</td>
                  <td>2pm</td>
                </tr>)
              }
            </tbody>
          </table>
        </menu>
      </div>
    </section>

     {addCandidateModalShowing && <AddCandidateModal/>}
    </>
  )
}

export default ElectionDetails
