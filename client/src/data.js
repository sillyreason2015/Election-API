import nkem from './assets/nkem.jpg';
import avatar from './assets/avatar.jpg';
import candidate1 from './assets/candidate1.jpg';
import candidate2 from './assets/candidate2.jpg'
import election1 from './assets/election.jpg'
import alliance from './assets/alliance.jpg'


export const elections = [
    {
        id: "e1",
        title: "Software Engineering Presidential Elections",
        description: `haha`,
        thumbnail: alliance,
        candidates: ["c1", "c2", "c3", "c4"],
        voters: []
    },
    {
        id: "e2",
        title: "Software Engineering npn Presidential Elections",
        description: `haha`,
        thumbnail: alliance,
        startDate: "",
        endDate: "",
        candidates: ["c1", "c2", "c3", "c4"],
        voters: []
    },
    {
        id: "e3",
        title: "Software Engineering executive Presidential Elections",
        description: `haha`,
        thumbnail: alliance,
        candidates: ["c1", "c2", "c3", "c4"],
        voters: []
    }
]


export const candidates = [
    {
        id: "c1",
        name: "Nathan Jatau",
        image: candidate1,
        motto: "How can I lose when I came here with nothing",
        voteCount: 50,
        election: "e1"
    },
     {
        id: "c2",
        name: "Nathan Jatau",
        image: candidate2,
        motto: "How can I lose when I came here with nothing",
        voteCount: 50,
        election: "e2"
    },
    {
        id: "c3",
        name: "Nathan Jatau",
        image: nkem,
        motto: "How can I lose when I came here with nothing",
        voteCount: 50,
        election: "e2"
    },
    {
        id: "c4",
        name: "Nathan Jatau",
        image: avatar,
        motto: "How can I lose when I came here with nothing",
        voteCount: 75,
        election: "e2"
    }
]


export const voters = [
    {
        id: "v1",
        name: "Nathan Jatau",
        email: "njatau@outlook.com",
        password: "12345",
        isAdmin: true,
        votedElections: ["e1", "e2"]
    },
      {
        id: "v2",
        name: "Nkem Jatau",
        email: "princessjatau@outlook.com",
        password: "12345",
        isAdmin: true,
        votedElections: ["e1", "e2"]
    },
      {
        id: "v3",
        name: "Neveah Jatau",
        email: "n.yamajatau@outlook.com",
        password: "12345",
        isAdmin: true,
        votedElections: ["e1", "e2"]
    }
]