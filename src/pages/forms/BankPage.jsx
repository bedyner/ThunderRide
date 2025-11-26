

import { Link } from 'react-router-dom';

import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';


import Header from '../../components/Driverpage/common/Header/Header';
import HelpDropdown from '../../components/Driverpage/common/HelpDropdown/HelpDropdown';
import BankAccountForm from '../../components/Driverpage/Forms/BankAcc/BankAcc';


export const BankPage = () => {
  return (
    <>
      <Header />

      <div className="earnpage-header">
        <div className="backto">
          <Link to="/"><ArrowBackIosRoundedIcon /></Link>
        </div>

        <HelpDropdown/>

        <BankAccountForm/>


      </div>

    </>
  );
};
