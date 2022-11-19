import React, { useContext } from "react";
import FeedbackItem from "./FeedbackItem";
import FeedbackForm from "./FeedbackForm";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackList() {
  
  const {feedback} = useContext(FeedbackContext)

  return (<> 
  <FeedbackForm/>
    <div className="feedbackList">
      <div className="imgcon">
        <img
          className="feedbackimage"
          src="https://png.pngtree.com/png-clipart/20220930/original/pngtree-customer-reviews-with-people-giving-star-ratings-on-a-mobile-phone-png-image_8644419.png"
          alt="feedback"
        />
      </div>
      <div className="showfeedback">
        {feedback.map((item) => (
          <FeedbackItem key={item.id} item={item} />
        ))}
      </div>
      
    </div>
    </>
  );
}

export default FeedbackList;
