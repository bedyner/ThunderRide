<<<<<<< HEAD
<<<<<<< HEAD
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

import './index.css'
import './output.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainPage } from './pages/MainPage';

import { Login } from './pages/login'; 
import { Signup } from './pages/Signup';
import { EarnPage } from './pages/forms/EarnPage';
import { VehicleForm } from './pages/forms/VehicleForm';
import { LegalForm } from './pages/forms/LegalForm';
import { Upload } from './pages/forms/Upload';
import { BankPage } from './pages/forms/BankPage';
import DriverDashboard from './pages/main/DriverDashboard';
import DriverPickup  from './pages/main/DriverPickup';
import ChatScreen from './pages/main/ChatScreen';
import ExpenseStats from './pages/main/ExpenseStats';
import ProfileScreen from './pages/main/ProfileScreen';
=======
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './index.css'
import './output.css';
import Login_passenger from './pages/User/Passenger/Login_passenger';
import Ride from "./pages/User/Passenger/Ride";
import Earn from "./pages/User/Passenger/Earn";
import Profile from "./pages/User/Passenger/Profile";
import About from "./pages/User/Passenger/About";
import Help from "./pages/User/Passenger/Help";
import Notification from "./pages/User/Passenger/Notification";
import Pickup from "./pages/User/Passenger/Pickup";
import Select from "./pages/User/Passenger/Select";
import Choosedropoff from "./pages/User/Passenger/Choosedropoff";
import Chooseride from "./pages/User/Passenger/Chooseride";
import Payments from "./pages/User/Passenger/Payments";
import ProcessDriver from "./pages/User/Passenger/ProcessDriver";
import Cancelride from "./pages/User/Passenger/Cancelride";
import TaxiNow from "./pages/User/Passenger/TaxiNow";
import Chat from "./pages/User/Passenger/Chat";
import Call from "./pages/User/Passenger/Call";
import Review from "./pages/User/Passenger/Review";
import Profileinformation from "./pages/User/Passenger/Profileinformation";
import Coupon from "./pages/User/Passenger/coupon";
import Security from "./pages/User/Passenger/Security";
import History from "./pages/User/Passenger/History";
import Previous from "./pages/User/Passenger/Previous";
>>>>>>> 38bbdcab97863080ed2b758f6f9934060dbf9445


=======
import { useState } from 'react';

import'.//App.css'

import './index.css'
import './output.css';
import MainApp from './component/MainApp';
>>>>>>> cbe9ce76336f1f440f848b455fc65391744bac81
function App() {
  const [count, setCount] = useState(0)

  return (
<<<<<<< HEAD
<<<<<<< HEAD
    <BrowserRouter>
      <Routes>
        {/* หน้าแรก */}
        <Route path="/" element={<MainPage />} />

        {/* หน้า Login */}
        <Route path="/login" element={<Login />} />

        {/* หน้า Signup */}
        <Route path="/signup" element={<Signup />} />
        
        {/* หน้า Earnpage */}
        <Route path="/earn" element={<EarnPage/>} />

        {/* หน้า VehicleForm */}
        <Route path="/form" element={<VehicleForm/>} />

        <Route path="/form2" element={<LegalForm/>} />
        
        <Route path="/form3" element={<Upload/>} />

        <Route path="/form4" element={<BankPage/>} />

        <Route path="/dashboard" element={<DriverDashboard />} />

        <Route path="/driver-profile" element={<ProfileScreen/>} />

        <Route path="/driver-pickup" element={<DriverPickup/>} />

        <Route path="/chat" element={<ChatScreen />} />

        <Route path="/expense-stats" element={<ExpenseStats />} />


      </Routes>
    </BrowserRouter>
=======
   <>
   <Router>
      <Routes>
        <Route path="/*" element={<Login_passenger />} />
        <Route path="/ride" element={<Ride />} />
        <Route path="/earn" element={<Earn />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/about" element={<About />} />
        <Route path="/help" element={<Help />} />
        <Route path="/profileinformation" element={<Profileinformation />} />
        <Route path="/coupon" element={<Coupon />} />
        <Route path="/security" element={<Security />} />
        <Route path="/history" element={<History/>} />
        <Route path="/previous" element={<Previous/>} />
        <Route path="/notifications" element={<Notification />} />
        <Route path="/ride/pickup" element={<Pickup />} />
        <Route path="/ride/select" element={<Select />} />
        <Route path="/ride/choosedropoff" element={<Choosedropoff />} />
        <Route path="/ride/chooseride" element={<Chooseride/>} />
        <Route path="/ride/ProcessDriver" element={<ProcessDriver />} />
        <Route path="/ride/cancelride" element={<Cancelride />} />
        <Route path="/ride/taxinow" element={<TaxiNow />} />
        <Route path="/ride/chat" element={<Chat />} />
        <Route path="/ride/review" element={<Review />} />
        <Route path="/ride/call" element={<Call />} />
        <Route path="/payments" element={<Payments />} />

      </Routes>
    </Router>

  

   </>
>>>>>>> 38bbdcab97863080ed2b758f6f9934060dbf9445
=======
    <>

      <MainApp/>
    

    </>
>>>>>>> cbe9ce76336f1f440f848b455fc65391744bac81
  );
}

export default App;
