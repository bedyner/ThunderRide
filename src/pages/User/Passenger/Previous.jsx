import React, { useState } from "react";
import {
  Box,
  IconButton,
  Typography,
  Divider,
  TextField,
  InputAdornment,
} from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import NearMeIcon from "@mui/icons-material/NearMe";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import Autocomplete from "@mui/material/Autocomplete";
import { useNavigate } from "react-router-dom";

const fakeOptions = [
  { label: "Sripatum University" },
  { label: "Central Plaza Ladprao" },
  { label: "Chatuchak Park" },
  { label: "Victory Monument" },
];

const Previous = () => {
  const navigate = useNavigate();

  // States สำหรับ Autocomplete
  const [pickupValue, setPickupValue] = useState(null);
  const [pickupInput, setPickupInput] = useState("");
  const [destinationValue, setDestinationValue] = useState(null);
  const [destinationInput, setDestinationInput] = useState("");

  return (
    <Box sx={{ p: 2, bgcolor: "#F7F7F7", minHeight: "100vh" }}>
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

        <Typography sx={{ fontWeight: "bold", fontSize: 22 }}>
          20 Sep 2025, 07:53
        </Typography>
      </Box>

      {/* Blog 1 - Booking ID */}
      <Box
        sx={{
          p: 2,
          bgcolor: "#fff",
          borderRadius: 2,
          mb: 2,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography sx={{ fontSize: 15, color: "#333" }}>Booking ID</Typography>
        <Typography sx={{ fontSize: 15, fontWeight: "bold" }}>
          XXXXXXXXX
        </Typography>
      </Box>

      {/* Blog 2 - Driver Info */}
      <Box
        sx={{
          p: 2,
          bgcolor: "#fff",
          borderRadius: 2,
          mb: 2,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography sx={{ fontSize: 15, color: "#333" }}>Driver</Typography>
        <Typography sx={{ fontSize: 15, fontWeight: "bold" }}>Name</Typography>
      </Box>

      {/* Blog 3 - Payment + Map */}
      <Box
        sx={{
          p: 2,
          bgcolor: "#fff",
          borderRadius: 2,
          mb: 2,
        }}
      >
        {/* Cash section */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 1 }}>
          <Box
            component="img"
            src="/images/cash.png"
            alt="Cash"
            sx={{ width: 24, height: 24 }}
          />
          <Typography sx={{ fontSize: 15 }}>Cash</Typography>
        </Box>

        <Divider sx={{ bgcolor: "#D3D3D3", my: 2 }} />

        {/* Price row */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 2,
          }}
        >
          <Typography sx={{ fontSize: 15, color: "#333" }}>Price</Typography>
          <Typography sx={{ fontSize: 15 }}>฿ 150</Typography>
        </Box>

        {/* Google Map placeholder */}
        <Box
          component="img"
          src="/images/field.png"
          alt="Map Preview"
          sx={{
            width: "100%",
            height: 180,
            borderRadius: 2,
            objectFit: "cover",
            mb: 2,
          }}
        />

        {/* Pickup Location */}
        <Autocomplete
          sx={{ mb: 2 }}
          value={pickupValue}
          onChange={(e, val) => setPickupValue(val)}
          inputValue={pickupInput}
          onInputChange={(e, val) => setPickupInput(val)}
          options={fakeOptions}
          getOptionLabel={(option) => option.label}
          renderInput={(params) => (
            <TextField
              {...params}
              placeholder="Bangkok"
              variant="outlined"
              fullWidth
              inputProps={{
                ...params.inputProps,
                style: { height: 15 },
              }}
              InputProps={{
                ...params.InputProps,
                startAdornment: (
                  <InputAdornment position="start" sx={{ ml: 1 }}>
                    <Box
                      sx={{
                        bgcolor: "#ECBD35",
                        borderRadius: "8px",
                        p: 0.7,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        transform: "rotate(90deg)",
                        boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
                      }}
                    >
                      <VpnKeyIcon sx={{ color: "#FFFFFF", fontSize: 20 }} />
                    </Box>
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      sx={{
                        bgcolor: "#ECBD35",
                        color: "#FFFFFF",
                        borderRadius: 0,
                        padding: "4px",
                        "&:hover": { bgcolor: "#d3a32e" },
                      }}
                    >
                      <NearMeIcon fontSize="small" />
                    </IconButton>
                  </InputAdornment>
                ),
                sx: {
                  backgroundColor: "#E5E5E5",
                  borderColor: "#E5E5E5",
                  height: 48,
                },
              }}
              InputLabelProps={{ shrink: false }}
            />
          )}
        />

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
              placeholder="Sripathum University"
              variant="outlined"
              fullWidth
              inputProps={{
                ...params.inputProps,
                style: { height: 15 },
              }}
              InputProps={{
                ...params.InputProps,
                startAdornment: (
                  <InputAdornment position="start" sx={{ ml: 1 }}>
                    <Box
                      sx={{
                        bgcolor: "#ECBD35",
                        borderRadius: "8px",
                        p: 0.7,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        transform: "rotate(270deg)",
                        boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
                      }}
                    >
                      <VpnKeyIcon sx={{ color: "#FFFFFF", fontSize: 20 }} />
                    </Box>
                  </InputAdornment>
                ),
                sx: {
                  backgroundColor: "#E5E5E5",
                  borderColor: "#E5E5E5",
                  height: 48,
                },
              }}
              InputLabelProps={{ shrink: false }}
            />
          )}
        />
      </Box>

      {/* 🟨 Blog 4 - Ride Experience */}
      <Box
        sx={{
          p: 2,
          bgcolor: "#fff",
          borderRadius: 2,
          mb: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography sx={{ fontSize: 15, color: "#333" }}>
          Ride Experience
        </Typography>
        {/* <Typography sx={{ fontWeight: "bold", color: "#ECBD35" }}>
          ⭐⭐⭐⭐⭐
        </Typography> */}
      </Box>
    </Box>
  );
};

export default Previous;
