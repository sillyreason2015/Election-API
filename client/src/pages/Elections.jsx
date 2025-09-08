import React, { useState } from 'react'
import {elections as dummyElections} from '../data'
import Election from '../components/Election'
import AddElectionModal from '../components/AddElectionModal'
import { useDispatch, useSelector } from 'react-redux'
import { uiActions } from '../store/ui-slice'
import UpdateElectionModal from '../components/UpdateElectionModal'

const Elections = () => {
  const [elections, setElections] = useState(dummyElections)


  const dispatch = useDispatch()

//open modal
const openModal = () => {
  dispatch(uiActions.openElectionModal())
}


const electionModalShowing = useSelector(state => state.ui.electionModalShowing)
const updateElectionModalShowing = useSelector(state => state.ui.updateElectionModalShowing)
  return (
    <>
      <section className="elections">
        <div className="container elections_container">
          <header className="elections_header">
            <h1>Ongoing Elections</h1>
            <button className="btn primary" onClick={openModal}>Create New Election</button>
          </header>
          <menu className="elections_menu">
            {
              elections.map(election=> <Election key = {election.id} {...election}/>)
            }
          </menu>
        </div>
    </section>

    {electionModalShowing && <AddElectionModal/>}
     {updateElectionModalShowing && <UpdateElectionModal/>}
    </>
  )
}

export default Elections