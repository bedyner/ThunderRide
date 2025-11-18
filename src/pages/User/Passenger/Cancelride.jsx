import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PersonIcon from "@mui/icons-material/Person";

const Cancelride = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const selectedPayment = location.state?.selectedPayment || null;

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
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0,0,0,0.55)",
          zIndex: 1,
        }}
      />
      {/* <Box sx={{ zIndex: 2 }}> */}
        {/* Content Box */}
        <Box
          sx={{
            backgroundColor: "white",
            borderRadius: 3,
            p: 3,
            boxShadow: 2,
            mt: "auto",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            // flexGrow: 1,
            zIndex: 2,
            gap: 1.5,
            alignItems: "center",
          }}
        >
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

          <Box
            sx={{
              width: "115%",
              height: 5,
              borderRadius: 5,
              background:
                "linear-gradient(to right, #ECBD35 65%, #fff4d4ff 35%)",
            }}
          />

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

          <Box
            sx={{
              mt: 3,
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: 1.5,
            }}
          >
            <Box
              onClick={() => navigate("/ride")}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#EE4426",
                borderRadius: 2,
                cursor: "pointer",
                height: 35,
                width: "100%",
                mx: "auto",
                "&:hover": { backgroundColor: "#d33b20" },
              }}
            >
              <Typography sx={{ color: "#fff", fontSize: 16 }}>
                Confirm
              </Typography>
            </Box>

            <Box
              onClick={() => navigate("/ride/ProcessDriver")}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#E6E6E6",
                borderRadius: 2,
                cursor: "pointer",
                height: 35,
                width: "100%",
                mx: "auto",
                "&:hover": { backgroundColor: "#bfbfbf" },
              }}
            >
              <Typography sx={{ color: "#000", fontSize: 16 }}>
                Cancel
              </Typography>
            </Box>
          </Box>
        </Box>
      {/* </Box> */}
    </Box>
  );
};

export default Cancelride;
