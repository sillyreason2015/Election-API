import React from 'react'
import {Link} from 'react-router-dom'
const Congrats = () => {
  return (
    <section className="congrats">
      <div className="container congrats_container">
        <h2>Thanks for your Vote!</h2>
        <p>You have successfully cast your vote. You will be redirected to see the updated results</p>
        <Link to='/results' className='btn sm primary'>See Results</Link>
      </div>
    </section>
  )
}

export default Congrats