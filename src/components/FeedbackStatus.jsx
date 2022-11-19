import React from 'react'
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'



function FeedbackStatus() {

  const {feedback} = useContext(FeedbackContext)

  let total = feedback.reduce((acc , cur) =>{
    return acc + cur.rating
  },0)
  
  let reviews = feedback.length
  let avg = total / feedback.length

  console.log(reviews)


 

  

  return (
    <div className='states'>

      <h2 className='totalReviews'> Reviews :{reviews} </h2>
      <h2 className='totalRating'> Rating : {isNaN(avg) ? 0 : avg}</h2>


    </div>
  )
}

export default FeedbackStatus
