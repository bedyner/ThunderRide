
import { Link } from 'react-router-dom';
import './Navbar.css';

import ReorderIcon from '@mui/icons-material/Reorder';

function Navbar() {
    return (
        <div className="navbar">
            <div className="leftSide">
                <h2 className="app-name">
                    <span className="name-word">Thunder</span>
                    <span className="name-word2">Ride</span>
                </h2>
            </div>
            <div className="rightSide">
                <div className="nav-links">
                    <Link to = "/Login">Login</Link>
                    <Link to = "/Signup" className="signup">Singup</Link>
                </div>
                <button className="menu-icon">
                    <ReorderIcon/>
                </button>
            </div>
        </div>
    )
}


export default Navbar