import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PersonIcon from "@mui/icons-material/Person";
import { useNavigate, useLocation } from "react-router-dom";

// ตัวอย่างค่าตำแหน่งจาก Google Maps API
const fakeDropoffLocations = [
  "Bangkok, Thailand",
  "Chiang Mai, Thailand",
  "Phuket, Thailand",
  "Khon Kaen, Thailand",
];

const Choosedropoff = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [destinationLocation, setDestinationLocation] = useState(
    location.state?.destination || "Bangkok, Thailand"
  );

  const handleConfirmDestination = () => {
    // ✅ เมื่อกด Confirm ให้ไปหน้า Chooseride.jsx
    navigate("/ride/chooseride", {
      state: { destination: destinationLocation },
    });
  };

  const handleCancel = () => {
    navigate("/ride/pickup");
  };

  const handleChangeDestination = () => {
    const nextIndex =
      (fakeDropoffLocations.indexOf(destinationLocation) + 1) %
      fakeDropoffLocations.length;
    setDestinationLocation(fakeDropoffLocations[nextIndex]);
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundImage: `url('./images/field.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        flexDirection: "column",
        p: 3,
      }}
    >
      {/* Header */}
      <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
        <IconButton
          onClick={() => navigate(-1)}
          sx={{
            backgroundColor: "white",
            borderRadius: "50%",
            width: 39,
            height: 39,
            border: "1.5px solid #D3D3D3",
            "&:hover": { backgroundColor: "#f0f0f0" },
            mr: 2,
            color: "black",
          }}
        >
          <ArrowBackIosNewIcon sx={{ fontSize: 20 }} />
        </IconButton>

        <Typography
          variant="h6"
          sx={{
            fontWeight: "bold",
            display: "flex",
            alignItems: "center",
            flexGrow: 1,
          }}
        >
          <Box
            component="span"
            sx={{
              color: "#ECBD35",
              WebkitTextStroke: "1px black",
              fontWeight: "bold",
              fontSize: 24,
              mr: 1,
            }}
          >
            THUNDER
          </Box>
          <Box component="span" sx={{ color: "black", fontSize: 24 }}>
            RIDE
          </Box>
        </Typography>

        <IconButton
          onClick={() => navigate("/notifications")}
          sx={{
            backgroundColor: "white",
            borderRadius: "50%",
            width: 30,
            height: 30,
            "&:hover": { backgroundColor: "#f0f0f0" },
            mr: 1,
            color: "#ECBD35",
          }}
        >
          <NotificationsIcon sx={{ fontSize: 20 }} />
        </IconButton>

        <IconButton
          onClick={() => navigate("/profile")}
          sx={{
            backgroundColor: "white",
            borderRadius: "50%",
            width: 40,
            height: 40,
            "&:hover": { backgroundColor: "#f0f0f0" },
            color: "#ECBD35",
          }}
        >
          <PersonIcon sx={{ fontSize: 30 }} />
        </IconButton>
      </Box>

      {/* Main Content */}
      <Box
        sx={{
          backgroundColor: "white",
          borderRadius: 3,
          p: 2,
          boxShadow: 2,
          mt: "auto",
          display: "flex",
          flexDirection: "column",
          gap: 1,
        }}
      >
        <Typography variant="subtitle1" sx={{ fontWeight: "bold", mb: 0.5 }}>
          Choose your drop-off spot
        </Typography>

        <Typography
          variant="body1"
          sx={{
            fontWeight: "bold",
            mb: 1,
            cursor: "pointer",
            color: "#333",
            "&:hover": { textDecoration: "underline" },
          }}
          onClick={handleChangeDestination}
        >
          {destinationLocation}
        </Typography>

        {/* Confirm Destination */}
        <Box
          onClick={handleConfirmDestination}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#ECBD35",
            borderRadius: 1,
            cursor: "pointer",
            height: 35,
            "&:hover": { backgroundColor: "#d3a32e" },
          }}
        >
          <Typography sx={{ fontWeight: "bold", color: "#000000ff" }}>
            Confirm
          </Typography>
        </Box>

        {/* Cancel */}
        <Box
          onClick={handleCancel}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#D3D3D3",
            borderRadius: 1,
            cursor: "pointer",
            height: 35,
            "&:hover": { backgroundColor: "#bfbfbf" },
          }}
        >
          <Typography sx={{ fontWeight: "bold", color: "#000000" }}>
            Cancel
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Choosedropoff;
