import {createSlice} from '@reduxjs/toolkit';

const currentVoter = {id: "v1", token: "Suyeiuyy", isAdmin: true}
const initialState = {selectedVoteCandidate: '', currentVoter, selectedElection: "", idOfElectionToUpdate: "", addCandidateElectionId: "" }

const voteSlice = createSlice({
    name: 'vote',
    initialState,
    reducers:{
        changeSelectedVoteCandidate(state, action){
            state.selectedVoteCandidate = action.payload;
        },
        channgeSelectedElection(state, action){
            state.selectedElection = action.payload;
        },
        changeIdOfCandidateElectionId(state, action){
            state.idOfElectionToUpdate = action.payload;
        },
        changeAddCandidateElectionId(state, action){
            state.addCandidateElectionId = action.payload;
        }
    }
})

export const voteActions = voteSlice.actions

export default voteSlice