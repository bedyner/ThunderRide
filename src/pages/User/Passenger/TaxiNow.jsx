// TaxiNow.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PersonIcon from "@mui/icons-material/Person";
import StarRateIcon from "@mui/icons-material/StarRate";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

const TaxiNow = () => {
  const navigate = useNavigate();
  const [showCancelModal, setShowCancelModal] = useState(false);
  const [showCompletionModal, setShowCompletionModal] = useState(false);

  // Function แสดง Completion Modal
  const handleShowCompletionModal = () => {
    setShowCompletionModal(true);
    setTimeout(() => {
      setShowCompletionModal(false);
      navigate("/ride/review");
    }, 3000); // 3 วินาที
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
          sx={{ fontWeight: "bold", display: "flex", alignItems: "center", flexGrow: 1 }}
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

      {/* Content */}
      <Box
        sx={{
          backgroundColor: "white",
          borderRadius: 3,
          p: 3,
          boxShadow: 2,
          mt: "auto",
          display: "flex",
          flexDirection: "column",
          gap: 1.5,
          alignItems: "center",
        }}
      >
        {/* Profile + Info */}
        <Box sx={{ display: "flex", alignItems: "center", width: "100%", gap: 2 }}>
          <img
            src="/images/profile.png"
            alt=""
            style={{ width: 80, height: 80, borderRadius: "50%", objectFit: "cover" }}
          />
          <Box sx={{ flexGrow: 1 }}>
            <Typography sx={{ fontWeight: "bold", fontSize: 20, color: "#555" }}>
              ทฬ 1956
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Typography sx={{ fontWeight: "bold", fontSize: 20, color: "#555" }}>
                สมหมาย
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                <StarRateIcon sx={{ color: "#FFD700", fontSize: 20 }} />
                <Typography sx={{ fontSize: 20, fontWeight: "bold", color: "#555" }}>
                  4.9
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>

        {/* ETA Text */}
        <Typography
          sx={{
            fontSize: 20,
            color: "#000",
            mt: 0.1,
            mb: 0.5,
            alignSelf: "flex-start",
            pl: 1,
          }}
        >
          Your Taxi will arrive in 16 min
        </Typography>

        {/* Action Buttons */}
        <Box sx={{ display: "flex", justifyContent: "space-between", width: "100%", gap: 1 }}>
          <Box
            onClick={() => navigate("/ride/chat")}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#ECBD35",
              borderRadius: 2,
              cursor: "pointer",
              height: 35,
              flexBasis: "32%",
              "&:hover": { backgroundColor: "#d3a32e" },
            }}
          >
            <ChatBubbleIcon sx={{ color: "#fff", mr: 1 }} />
            <Typography sx={{ color: "#fff", fontWeight: "bold", fontSize: 17 }}>
              Chat
            </Typography>
          </Box>

          <Box
            onClick={() => navigate("/ride/call")}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#ECBD35",
              borderRadius: 2,
              cursor: "pointer",
              height: 35,
              flexBasis: "32%",
              "&:hover": { backgroundColor: "#999" },
            }}
          >
            <LocalPhoneIcon sx={{ color: "#fff", mr: 1 }} />
            <Typography sx={{ color: "#fff", fontWeight: "bold", fontSize: 17 }}>
              Call
            </Typography>
          </Box>

          <Box
            onClick={() => setShowCancelModal(true)}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#EE4426",
              borderRadius: 2,
              cursor: "pointer",
              height: 35,
              flexBasis: "30%",
              "&:hover": { backgroundColor: "#d33b20" },
            }}
          >
            <Typography sx={{ color: "#fff", fontWeight: "bold", fontSize: 17 }}>
              Cancel
            </Typography>
          </Box>
        </Box>
        
        {/* //Finish button สำหรับทดสอบ passenger */}

        {/* <Typography
          sx={{
            fontSize: 20,
            color: "#000",
            mt: 0.1,
            mb: 0.5,
            alignSelf: "flex-start",
            pl: 1,
          }}
        >
          Finish button สำหรับทดสอบ
        </Typography>
        <Box
          onClick={handleShowCompletionModal}
          sx={{
            backgroundColor: "#4CAF50",
            color: "#fff",
            borderRadius: 2,
            cursor: "pointer",
            p: 1,
            mt: 2,
            textAlign: "center",
            width: "100%",
          }}
        >
          Finish
        </Box> */}
      </Box>

      {/* Cancel Modal */}
      {showCancelModal && (
        <Box
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            bgcolor: "rgba(0,0,0,0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999,
          }}
        >
          <Box
            sx={{
              backgroundColor: "white",
              borderRadius: 3,
              p: 3,
              width: 300,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 1,
            }}
          >
            <img
              src="/images/cancelride.png"
              alt="Cancel Ride"
              style={{ width: 80, height: 80 }}
            />
            <Typography sx={{ fontSize: 20, fontWeight: "bold", mt: 0.5 }}>
              Cancel ride
            </Typography>

            <Box sx={{ display: "flex", gap: 1, width: "100%", mt: 1 }}>
              <Box
                onClick={() => {
                  setShowCancelModal(false);
                  navigate("/ride");
                }}
                sx={{
                  flex: 1,
                  backgroundColor: "#EE4426",
                  color: "#fff",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 2,
                  fontSize: "16px",
                  height: 35,
                  fontWeight: "bold",
                  cursor: "pointer",
                  "&:hover": { backgroundColor: "#d33b20" },
                }}
              >
                Confirm
              </Box>
              <Box
                onClick={() => setShowCancelModal(false)}
                sx={{
                  flex: 1,
                  backgroundColor: "#E6E6E6",
                  color: "#000",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 2,
                  fontSize: "16px",
                  height: 35,
                  cursor: "pointer",
                  fontWeight: "bold",
                  "&:hover": { backgroundColor: "#bfbfbf" },
                }}
              >
                Cancel
              </Box>
            </Box>
          </Box>
        </Box>
      )}

      {/* Completion Modal */}
      {showCompletionModal && (
        <Box
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            bgcolor: "rgba(0,0,0,0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999,
          }}
        >
          <Box
            sx={{
              backgroundColor: "white",
              borderRadius: 3,
              p: 3,
              width: 300,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 0.1,
            }}
          >
            <img
              src="/images/correct.png"
              alt="Completed"
              style={{ width: 65, height: 60 }}
            />
            <Typography sx={{ fontSize: 18, fontWeight: "bold", mt: 0.5 }}>
              Your ride has been completed.
            </Typography>
            <Typography sx={{ fontSize: 16, color: "#6D6A6A" }}>
              Thank you for using
            </Typography>
            <Typography sx={{ fontSize: 16, color: "#6D6A6A" }}>
              Thunder Ride
            </Typography>
            <Typography sx={{ fontSize: 14, color: "#6D6A6A", textAlign: "center" }}>
              Redirecting you to the review page...
            </Typography>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default TaxiNow;
