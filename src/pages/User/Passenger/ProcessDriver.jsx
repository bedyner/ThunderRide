import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PersonIcon from "@mui/icons-material/Person";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";

const ProcessDriver = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const selectedPayment = location.state?.selectedPayment || null;

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // เพิ่ม progress ทีละ 1% ทุก 50ms
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          navigate("/ride/taxinow");
          return 100;
        }
        return prev + 1;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [navigate]);

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
        {/* Title */}
        <Typography
          variant="subtitle1"
          sx={{
            fontWeight: "bold",
            textAlign: "center",
            fontSize: 20,
          }}
        >
          Connecting you to a driver
        </Typography>

        {/* Animated Progress bar */}
        <Box
          sx={{
            width: "115%",
            height: 5,
            borderRadius: 5,
            backgroundColor: "#fff4d4ff",
            mt: 1,
            overflow: "hidden",
          }}
        >
          <Box
            sx={{
              height: "100%",
              width: `${progress}%`,
              background: "linear-gradient(to right, #ECBD35)",
              transition: "width 0.05s linear",
            }}
          />
        </Box>

        {/* Profile Image */}
        <Box sx={{ mt: 1.5 }}>
          <img
            src="/images/profile.png"
            alt="Profile"
            style={{
              width: 90,
              height: 90,
              borderRadius: "50%",
              objectFit: "cover",
            }}
          />
        </Box>

        {/* Cancel Ride Box */}
        <Box
          onClick={() => navigate("/ride/cancelride")}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            mt: 0.5,
            cursor: "pointer",
          }}
        >
          <img
            src="/images/cancelride.png"
            alt="Cancel Ride"
            style={{ width: 50, height: 50, objectFit: "contain" }}
          />
          <Typography sx={{ mt: 0.1, fontWeight: "bold", color: "#555" }}>
            Cancel ride
          </Typography>
        </Box>

        {/* Gray line */}
        <Box
          sx={{
            width: "115%",
            height: 7,
            backgroundColor: "#ccc",
            borderRadius: 1,
            mt: 0.5,
          }}
        />

        {/* My route section */}
        <Box sx={{ width: "100%", pl: 1 }}>
          <Typography
            sx={{ mt: 0.5, fontWeight: "bold", color: "#555", fontSize: 20 }}
          >
            My route
          </Typography>

          <Box sx={{ display: "flex", flexDirection: "column", mt: 1 }}>
            {/* Bangkok */}
            <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1 }}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <RadioButtonCheckedIcon sx={{ color: "#ECBD35", fontSize: 18 }} />
                <Box
                  sx={{
                    width: 2,
                    height: 40,
                    backgroundColor: "#ccc",
                  }}
                />
              </Box>
              <Typography
                sx={{ fontWeight: "bold", color: "#555", fontSize: 15, mt: 0.5 }}
              >
                Bangkok
              </Typography>
            </Box>

            {/* Sripathum University */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 1, mt: 0 }}>
              <RadioButtonUncheckedIcon sx={{ color: "#ccc", fontSize: 18 }} />
              <Typography sx={{ fontWeight: "bold", color: "#555", fontSize: 15 }}>
                Sripathum University
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* Gray line */}
        <Box
          sx={{
            width: "115%",
            height: 7,
            backgroundColor: "#ccc",
            borderRadius: 1,
            mt: 0.5,
          }}
        />

        {/* Payment method */}
        <Box sx={{ pl: 1 }}>
          <Typography
            sx={{ mt: 0.5, fontWeight: "bold", color: "#555", fontSize: 20 }}
          >
            Payment method
          </Typography>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              border: "1px solid #ddd",
              borderRadius: 2,
              px: 1,
              py: 0.5,
              width: 290,
              backgroundColor: "#f9f9f9",
              mt: 1.5,
            }}
          >
            {selectedPayment ? (
              <>
                <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                  <img
                    src={selectedPayment.image}
                    alt={selectedPayment.name}
                    style={{
                      width: selectedPayment.id <= 2 ? 50 : 30,
                      height: selectedPayment.id <= 2 ? 35 : 30,
                      borderRadius: 5,
                      objectFit: "cover",
                    }}
                  />
                  <Typography sx={{ fontSize: 15, color: "#555" }}>
                    {selectedPayment.name}
                  </Typography>
                </Box>
                {selectedPayment.showIcon && (
                  <KeyboardArrowRightIcon sx={{ fontSize: 16, color: "#555" }} />
                )}
              </>
            ) : (
              <>
                <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                  <AttachMoneyIcon sx={{ fontSize: 16, color: "#555" }} />
                  <Typography sx={{ fontSize: 15, color: "#555" }}>Cash</Typography>
                </Box>
                <Typography sx={{ fontSize: 15, color: "#555" }}>|</Typography>
                <Typography sx={{ fontSize: 15, color: "#555" }}>Offers</Typography>
                <Typography sx={{ fontSize: 15, color: "#555" }}>|</Typography>
                <KeyboardArrowDownIcon sx={{ fontSize: 16, color: "#555" }} />
              </>
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ProcessDriver;
