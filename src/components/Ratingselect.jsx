import React from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import FeedbackContext from '../context/FeedbackContext'

export default function Ratingselect({select}) {

  const [selected , setSelected] = useState(5)
  const {feedbackedit} = useContext(FeedbackContext)

  useEffect(()=>{
    setSelected(feedbackedit.item.rating)
  },[feedbackedit])

  const handleChange = (e) => {
    console.log(typeof e.currentTarget.value)
    setSelected(+e.currentTarget.value) // + laga k number bn gya phle string tha
    select(+e.currentTarget.value)
  }

  return (
    <div className='rate'>
       <input type="radio" id="star5" name="rate" value="5" onChange={handleChange} checked={selected === 5} />
    <label htmlFor="star5" title="text">5 stars</label>
    <input type="radio" id="star4" name="rate" value="4" onChange={handleChange} checked={selected === 4} />
    <label htmlFor="star4" title="text">4 stars</label>
    <input type="radio" id="star3" name="rate" value="3" onChange={handleChange} checked={selected === 3} />
    <label htmlFor="star3" title="text">3 stars</label>
    <input type="radio" id="star2" name="rate" value="2" onChange={handleChange} checked={selected === 2} />
    <label htmlFor="star2" title="text">2 stars</label>
    <input type="radio" id="star1" name="rate" value="1" onChange={handleChange} checked={selected === 1} />
    <label htmlFor="star1" title="text">1 star</label>
    </div>
  )
}
