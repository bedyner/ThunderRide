import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PersonIcon from "@mui/icons-material/Person";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Autocomplete from "@mui/material/Autocomplete";
import NearMeIcon from "@mui/icons-material/NearMe";
import { useNavigate } from "react-router-dom";

const fakeOptions = [
  { label: 'Bangkok, Thailand', value: 'bangkok' },
  { label: 'Chiang Mai, Thailand', value: 'chiangmai' },
  { label: 'Phuket, Thailand', value: 'phuket' },
];

const Ride = () => {
  const navigate = useNavigate();

  // state สำหรับ Pickup & Destination
  const [pickupValue, setPickupValue] = useState(null);
  const [pickupInput, setPickupInput] = useState("");
  const [destinationValue, setDestinationValue] = useState(null);
  const [destinationInput, setDestinationInput] = useState("");

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

      {/* Call a Car Form */}
      <Box
        sx={{
          backgroundColor: "white",
          borderRadius: 3,
          p: 3,
          boxShadow: 2,
          mt: "auto",
        }}
      >
        <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold" }}>
          Call a Car
        </Typography>

        {/* Pickup Location */}
        <Box sx={{ position: 'relative', mb: 2 }}>
          <Autocomplete
            value={pickupValue}
            onChange={(e, val) => setPickupValue(val)}
            inputValue={pickupInput}
            onInputChange={(e, val) => setPickupInput(val)}
            options={fakeOptions}
            getOptionLabel={(option) => option.label}
            renderInput={(params) => (
              <TextField
                {...params}
                placeholder="Pickup Location"
                variant="outlined"
                fullWidth
                onClick={() => navigate("/ride/pickup")}
                InputProps={{
                  ...params.InputProps,
                  startAdornment: (
                    <InputAdornment position="start" sx={{ ml: 1 }}>
                      <Box
                        component="img"
                        src="./images/pick.png"
                        sx={{
                          width: 28,
                          height: 28,
                          objectFit: "contain",
                        }}
                      />
                    </InputAdornment>
                  ),
                  sx: { backgroundColor: "#E5E5E5", borderColor: "#E5E5E5", height: 48 },
                }}
                InputLabelProps={{ shrink: false }}
              />
            )}
          />

          {/* Pickup Icon ชิดขวาแบบ absolute, right 1 */}
          <IconButton
            onClick={() => navigate("/ride/pickup")}
            sx={{
              position: 'absolute',
              right: 1, // เว้นขอบขวา 1px
              top: '50%',
              transform: 'translateY(-50%)',
              bgcolor: "#ECBD35",
              color: "#FFFFFF",
              borderRadius: 0,
              width: 24,
              height: 24,
              padding: 0,
              marginRight: 1,
              "&:hover": { bgcolor: "#d3a32e" },
            }}
          >
            <NearMeIcon fontSize="small" />
          </IconButton>
        </Box>

        {/* Destination */}
        <Autocomplete
          sx={{ mb: 0 }}
          value={destinationValue}
          onChange={(e, val) => setDestinationValue(val)}
          inputValue={destinationInput}
          onInputChange={(e, val) => setDestinationInput(val)}
          options={fakeOptions}
          getOptionLabel={(option) => option.label}
          renderInput={(params) => (
            <TextField
              {...params}
              placeholder="Destination"
              variant="outlined"
              fullWidth
              onClick={() => navigate("/ride/pickup")}
              InputProps={{
                ...params.InputProps,
                startAdornment: (
                  <InputAdornment position="start" sx={{ ml: 1 }}>
                    <Box
                      component="img"
                      src="./images/des.png"
                      sx={{
                        width: 28,
                        height: 28,
                        objectFit: "contain",
                      }}
                    />
                  </InputAdornment>
                ),
                sx: { backgroundColor: "#E5E5E5", borderColor: "#E5E5E5", height: 48 },
              }}
              InputLabelProps={{ shrink: false }}
            />
          )}
        />
      </Box>
    </Box>
  );
};

export default Ride;
