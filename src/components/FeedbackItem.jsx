import React from 'react'
import { useContext } from 'react'
import { FaEdit, FaTimes } from "react-icons/fa"
import FeedbackContext from '../context/FeedbackContext'




function FeedbackItem({item }) {

  const {deleteFeedback, editFeedback} = useContext(FeedbackContext)

  
  
  return (
    <div className='feedbackItem'>
      <div className="modify">
        <button className='edit' onClick={() => deleteFeedback(item.id)}><FaTimes/> </button>  
        <button className='editBtn' onClick={() => editFeedback(item)}><FaEdit/> </button>       

      </div>
      <p className='rating'> {item.rating}</p>
      <p className='review'>{item.text}</p>
    </div>
  )
}

export default FeedbackItem
