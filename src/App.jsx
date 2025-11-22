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


function App() {
  return (
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
  );
}

export default App;
