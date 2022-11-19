import FeedbackList from "./components/FeedbackList";
import FeedbackStatus from "./components/FeedbackStatus";
import Header from "./components/Header";
import { FeedbackProvider } from "./context/FeedbackContext";


function App() {
  return ( 
  <FeedbackProvider>  
     <Header/>     
     <FeedbackStatus />
     <FeedbackList/>        
  </FeedbackProvider> 
  );
}

export default App;
