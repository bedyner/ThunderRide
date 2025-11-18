import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import InputAdornment from "@mui/material/InputAdornment";
import NearMeIcon from "@mui/icons-material/NearMe";
import PlaceIcon from "@mui/icons-material/Place";
import { useNavigate, useLocation } from "react-router-dom";

const fakeOptions = [
  { label: "Bangkok, Thailand" },
  { label: "Chiang Mai, Thailand" },
  { label: "Phuket, Thailand" },
  { label: "Khon Kaen, Thailand" },
];

const Pickup = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [pickupValue, setPickupValue] = useState(null);
  const [pickupInput, setPickupInput] = useState("");
  const [destinationValue, setDestinationValue] = useState(null);
  const [destinationInput, setDestinationInput] = useState("");

  const [editingField, setEditingField] = useState(null); // 'pickup' | 'destination'

  useEffect(() => {
    if (location.state?.pickupLocation) {
      setPickupInput(location.state.pickupLocation);
      setPickupValue({ label: location.state.pickupLocation });
    }
    if (location.state?.destination) {
      setDestinationInput(location.state.destination);
      setDestinationValue({ label: location.state.destination });
    }
  }, [location.state]);

  const handlePickupIconClick = () => {
    alert("📍 Placeholder: รองรับ Google Maps API สำหรับ Pickup Location");
  };

  const handleSetLocationClick = () => {
    if (editingField === "pickup") {
      navigate("/ride/select", { state: { pickupLocation: pickupInput } });
    } else if (editingField === "destination") {
      navigate("/ride/choosedropoff", { state: { destination: destinationInput } });
    } else {
      alert("Please select Pickup or Destination first");
    }
  };

  return (
    <>
      {/* Header */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mb: 3,
          pt: 5,
          position: "relative",
        }}
      >
        <IconButton
          onClick={() => navigate(-1)}
          sx={{
            backgroundColor: "white",
            borderRadius: "50%",
            width: 39,
            height: 39,
            border: "1.5px solid #D3D3D3",
            "&:hover": { backgroundColor: "#f0f0f0" },
            color: "black",
            position: "absolute",
            left: 16,
          }}
        >
          <ArrowBackIosNewIcon sx={{ fontSize: 20 }} />
        </IconButton>

        <Typography variant="h6" sx={{ textAlign: "center", fontSize: 22, fontWeight: "bold" }}>
          <Box component="span" sx={{ color: "#000000" }}>
            Plan your trip
          </Box>
        </Typography>
      </Box>

      {/* Pickup & Destination */}
      <Box sx={{ px: 2 }}>
        {/* Pickup Location */}
        <Box sx={{ position: "relative", mb: 2 }}>
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
                onFocus={() => setEditingField("pickup")}
                InputProps={{
                  ...params.InputProps,
                  startAdornment: (
                    <InputAdornment position="start" sx={{ ml: 1 }}>
                      <Box
                        component="img"
                        src="/images/pick.png"
                        sx={{ width: 24, height: 24, objectFit: "contain" }}
                      />
                    </InputAdornment>
                  ),
                  sx: { backgroundColor: "#E5E5E5", borderColor: "#E5E5E5", height: 48 },
                }}
                InputLabelProps={{ shrink: false }}
              />
            )}
          />

          {/* Pickup Icon ชิดขวาแบบ absolute */}
          <IconButton
            onClick={handlePickupIconClick}
            sx={{
              position: "absolute",
              right: 1, // เว้นขอบขวา 1px
              top: "50%",
              transform: "translateY(-50%)",
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
              onFocus={() => setEditingField("destination")}
              InputProps={{
                ...params.InputProps,
                startAdornment: (
                  <InputAdornment position="start" sx={{ ml: 1 }}>
                    <Box
                      component="img"
                      src="/images/des.png"
                      sx={{ width: 24, height: 24, objectFit: "contain" }}
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

      {/* Set location on map */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          mt: 4,
          mb: 10,
          px: 2,
        }}
      >
        <Box
          onClick={handleSetLocationClick}
          sx={{
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
          }}
        >
          <Box
            sx={{
              backgroundColor: "#D3D3D3",
              borderRadius: "50%",
              width: 39,
              height: 39,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "1.5px solid #D3D3D3",
              mr: 1,
              "&:hover": { backgroundColor: "#bfbfbf" },
            }}
          >
            <PlaceIcon sx={{ fontSize: 20, color: "black" }} />
          </Box>
          <Typography variant="h6" sx={{ fontSize: 22, fontWeight: "bold" }}>
            Set location on map
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Pickup;
