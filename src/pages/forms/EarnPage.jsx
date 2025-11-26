

import { Link } from 'react-router-dom';

import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';

import "../../css/EarnPage.css";

import Earn from "../../components/Driverpage/Forms/Earn/Earn";
import Header from '../../components/Driverpage/common/Header/Header';
import HelpDropdown from '../../components/Driverpage/common/HelpDropdown/HelpDropdown';

export const EarnPage = () => {
  return (
    <>
      <Header />

      <div className="earnpage-header">
        <div className="backto">
          <Link to="/"><ArrowBackIosRoundedIcon /></Link>
        </div>

        <HelpDropdown/>

        <Earn/>

      </div>

    </>
  );
};
