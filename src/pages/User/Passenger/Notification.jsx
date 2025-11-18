import React from "react";
import { Box, IconButton, Typography } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { useNavigate } from "react-router-dom";

const Notification = () => {
  const navigate = useNavigate();

  const notifications = [
    { name: "สมหมาย", status: "Arrived", statusColor: "#21AE5B", statusBg: "#D3F1E0", icon: <AccessTimeIcon />, detail: "Arrived at Sripatum University." },
    { name: "สมหมาย", status: "Almost there", statusColor: "#D88F22", statusBg: "#F8EBCC", icon: <AccessTimeIcon />, detail: "10 min to destination." },
    { name: "นฤมล", status: "Cancel", statusColor: "#D86222", statusBg: "#F8D3CC", icon: <AccessTimeIcon />, detail: "Location Sripatum University : 3.47 km away." },
    // { name: "สมศักดิ์", status: "Arrived", statusColor: "#21AE5B", statusBg: "#D3F1E0", icon: <AccessTimeIcon />, detail: "Arrived at Sripatum University." },
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

        <Typography sx={{ fontWeight: "bold", fontSize: 22 }}>Notification</Typography>
      </Box>

      {/* Notifications list */}
      {notifications.map((note, index) => (
        <Box
          key={index}
          sx={{
            p: 2,
            mb: 2,
            bgcolor: "#fff",
            borderRadius: 2,
          }}
        >
          {/* Top row: name + status */}
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 1 }}>
            <Typography sx={{ fontWeight: "", fontSize: 15 }}>{note.name}</Typography>
            <Box
              sx={{
                bgcolor: note.statusBg,
                color: note.statusColor,
                px: 1.5,
                py: 0.5,
                borderRadius: 2,
                fontWeight: "bold",
                fontSize: 13,
              }}
            >
              {note.status}
            </Box>
          </Box>

          {/* Bottom row: icon + detail */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            {note.icon}
            <Typography sx={{ fontSize: 14, color: "#5D5C5D" }}>{note.detail}</Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default Notification;
