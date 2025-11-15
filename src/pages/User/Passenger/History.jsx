import React from "react";
import { Box, IconButton, Typography } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import { useNavigate } from "react-router-dom";

const History = () => {
  const navigate = useNavigate();

  const historyItems = [
    { name: "Siam Paragon", detail: "20 Sep 2025, 15:53." },
    { name: "Sripatum University", detail: "20 Sep 2025, 07:53." },
    { name: "Siam Paragon", detail: "19 Sep 2025, 07:53." },
    { name: "Central World", detail: "18 Sep 2025, 18:20." },
    { name: "Don Mueang Airport", detail: "17 Sep 2025, 09:45." },
    { name: "Bangkok Hospital", detail: "16 Sep 2025, 20:30." },
  ];

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
          Previous Ride
        </Typography>
      </Box>

      {/* History list */}
      {historyItems.map((item, index) => (
        <Box
          key={index}
          onClick={() => navigate("/previous")} // ✅ เมื่อกดทั้ง blog จะไปหน้า /previous
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            p: 2,
            mb: 2,
            bgcolor: "#fff",
            borderRadius: 2,
            boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
            cursor: "pointer",
            transition: "transform 0.15s ease",
            "&:hover": {
              transform: "scale(1.02)",
              bgcolor: "#f9f9f9",
            },
          }}
        >
          {/* Left: Image + info */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Box
              component="img"
              src="/images/ride.png"
              alt="Ride"
              sx={{
                width: 40,
                height: 40,
                borderRadius: 1.5,
                objectFit: "cover",
              }}
            />
            <Box>
              <Typography sx={{ fontWeight: "bold", fontSize: 15 }}>
                {item.name}
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                <AccessTimeIcon sx={{ fontSize: 16, color: "#5D5C5D" }} />
                <Typography sx={{ fontSize: 14, color: "#5D5C5D" }}>
                  {item.detail}
                </Typography>
              </Box>
            </Box>
          </Box>

          {/* Right: Rebook icon */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <RestartAltIcon sx={{ color: "#ECBD35", fontSize: 28 }} />
            <Typography
              sx={{
                fontSize: 12,
                color: "#515759",
                fontWeight: "bold",
                mt: 0.3,
              }}
            >
              Rebook
            </Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default History;
