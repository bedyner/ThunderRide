
import { Link } from "react-router-dom";
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";

import "../../css/VehicleForm.css";

import Header from "../../components/Driverpage/common/Header/Header";
import HelpDropdown from "../../components/Driverpage/common/HelpDropdown/HelpDropdown";
import LegForm from "../../components/Driverpage/Forms/LegForm/LegForm";


export const LegalForm = () => {
  return (
    <>
      <Header/>

      <div className="earnpage-header">
        <div className="backto">
          <Link to="/earn"><ArrowBackIosRoundedIcon /></Link>
        </div>

        <HelpDropdown/>

        <LegForm/>

      </div>

    </>
  );
};
