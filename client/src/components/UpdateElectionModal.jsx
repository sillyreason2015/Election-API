import React, { useState } from 'react'
import { IoMdClose } from 'react-icons/io'
import { useDispatch } from 'react-redux'
import { uiActions } from '../store/ui-slice'

const UpdateElectionModal = () => {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [thumbnail, setThumbnail] = useState(null)

  const dispatch = useDispatch()

  const closeModal = () => {
    dispatch(uiActions.closeUpdateElectionModal())
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newElection = {
      title,
      description,
      thumbnail,
    }
    console.log("Election Data:", newElection)
    // TODO: send to API or Redux
    closeModal()
  }

  return (
    <section className="modal">
      <div className="modal_content">
        <header className="modal_header">
          <h4>Update Election</h4>
          <button className="modal_close" onClick={closeModal}>
            <IoMdClose />
          </button>
        </header>
        <form onSubmit={handleSubmit}>
          <div>
            <h6>Election Title:</h6>
            <input
              type="text"
              value={title}
              onChange={e => setTitle(e.target.value)}
              required
            />
          </div>

          <div>
            <h6>Election Description:</h6>
            <input
              type="text"
              value={description}
              onChange={e => setDescription(e.target.value)}
              required
            />
          </div>

          <div>
            <h6>Election Thumbnail:</h6>
            <input
              type="file"
              onChange={e => setThumbnail(e.target.files[0])}
              accept=".png,.jpg,.jpeg,.webp,.avif,.heif"
            />
          </div>

          <button type="submit" className="btn primary">
            Update Election
          </button>
        </form>
      </div>
    </section>
  )
}

export default UpdateElectionModal
