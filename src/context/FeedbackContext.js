import { useState } from "react";
import { createContext } from "react";
import { v4 as uuidv4} from "uuid"


 const FeedbackContext = createContext();


  export const FeedbackProvider = ({children}) => {

    const [feedback,setFeedback] = useState([{
      id: 1,
      rating: 5,
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.',
    },
    {
      id: 2,
      rating: 3,
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.',
    },
    {
      id: 3,
      rating: 4,
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.',
    }]
    )

    const [feedbackedit , setFeedbackEdit] = useState({
      item : {},
      edit : false
    })

    const deleteFeedback = (id) => {
      if(window.confirm("are you sure u want to delete")){
        setFeedback(feedback.filter((item) => item.id !== id))
      }
    }

    const addFeedback = (newFeedback) => {
      newFeedback.id = uuidv4()
      setFeedback([newFeedback ,...feedback])
    }

    const editFeedback = (item) => {
      setFeedbackEdit({
        item,
        edit : true
      })
    }

    const updtFeedback = (id , upditem) => {
      setFeedback(feedback.map((item)=> (item.id === id ? {...item , ...upditem} : item)))
    }

    return <FeedbackContext.Provider value={
        { feedback ,
          deleteFeedback,
          addFeedback,
          editFeedback,
          feedbackedit,
          updtFeedback
        }
        
    }>
        {children}
    </FeedbackContext.Provider>
  }

  export default FeedbackContext