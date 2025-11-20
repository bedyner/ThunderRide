
import { Link } from "react-router-dom";
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";

import "../../css/VehicleForm.css";

import Header from "../../components/Driverpage/common/Header/Header";
import HelpDropdown from "../../components/Driverpage/common/HelpDropdown/HelpDropdown";
import VehForm from "../../components/Driverpage/Forms/VehForm/VehForm";

export const VehicleForm = () => {
  return (
    <>
      <Header/>

      <div className="earnpage-header">
        <div className="backto">
          <Link to="/earn"><ArrowBackIosRoundedIcon /></Link>
        </div>

        <HelpDropdown/>

        <VehForm/>

      </div>

    </>
  );
};


