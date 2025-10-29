import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './index.css'
import './output.css';
import Login_passenger from './pages/User/Passenger/Login_passenger';


function App() {
  return (
   <>
   <Router>
      <Routes>
        <Route path="/*" element={<Login_passenger />} />
      </Routes>
    </Router>

  

   </>
  );
}

export default App;
