
import { Link } from "react-router-dom";
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";

import "../../css/Upload.css";

import Header from "../../components/Driverpage/common/Header/Header";
import HelpDropdown from "../../components/Driverpage/common/HelpDropdown/HelpDropdown";
import DocUp from "../../components/Driverpage/Forms/DocUp/DocUp";
import { CssBaseline } from '@mui/material';



export const Upload = () => {
  return (
    <>
      <Header/>

      <div className="earnpage-header">
        <div className="backto">
          <Link to="/earn"><ArrowBackIosRoundedIcon /></Link>
        </div>

        <HelpDropdown/>

        <CssBaseline/>
        <DocUp/>


      </div>

    </>
  );
};