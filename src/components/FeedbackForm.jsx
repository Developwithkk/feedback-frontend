import React, { useState } from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'
import Ratingselect from './Ratingselect'


function FeedbackForm() {

    const [text , setText] = useState("")
    const[isDisabled , setIsDisabled] = useState(false)
    const [message , setMessage] = useState("")
    const [rating , setRating] = useState(3)
    const {addFeedback ,feedbackedit ,updtFeedback} = useContext(FeedbackContext)

    useEffect(() => {
      if(feedbackedit.edit === true){
        setIsDisabled(false)
        setText(feedbackedit.item.text)
        setRating(feedbackedit.item.rating)
      }

    },[feedbackedit])

    const handleSubmit = (e) => {
      e.preventDefault()
      const newFeedback = {
        text,
        rating,
      }
      console.log(newFeedback)
      if(feedbackedit.edit === true){
        updtFeedback(feedbackedit.item.id , newFeedback)
      } else{

        addFeedback(newFeedback)
      }
      setText("")
    }

   const handleChange = (e) => {
    if(text === ""){
      setMessage(null)
      setIsDisabled(true)
     } else if (text !== "" && text.trim().length <=10){
      setMessage("Text must be at least 10 chracters")
      setIsDisabled(true)
     }
     else {
      setMessage(null)
      setIsDisabled(false)
     }
    setText(e.target.value)
   }

  return (
    <div className="container">
    <div className='formPart'>
      
      <h2 className="headline">How would you rate our services</h2>
      
      
      <div className="inputGroup">
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Write Your Review' onChange={handleChange} value={text}/>
        <button className='btn'disabled={isDisabled} type='submit'>Send</button>
        </form>
        <p className='warning'>{(text !== "" && text.trim().length <= 10) ? message : ""}</p>
      </div>
      <div>
      <Ratingselect select ={(rating) => {setRating(rating)}}/>
      </div>
    </div>
    </div>
  )
}

export default FeedbackForm
