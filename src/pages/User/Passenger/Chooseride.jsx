import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PersonIcon from "@mui/icons-material/Person";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import PersonIconSmall from "@mui/icons-material/Person";
import { useNavigate, useLocation } from "react-router-dom";

const fakeRides = [
  { id: 1, name: "Car", price: 129, distance: "3.5 km", image: "/images/Car.png", passengers: 15 },
  { id: 2, name: "Taxi", price: 150, distance: "3.5 km", image: "/images/Taxi.png", passengers: 25 },
  { id: 3, name: "Motobike", price: 65, distance: "3.5 km", image: "/images/Motobike.png", passengers: 20 },
  { id: 4, name: "Van", price: 342, distance: "3.5 km", image: "/images/Van.png", passengers: 17 },
];

const Chooseride = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const destination = location.state?.destination || "Unknown";
  const selectedPaymentFromState = location.state?.selectedPayment;

  const [selectedRides, setSelectedRides] = useState([]);
  const [selectedPayment, setSelectedPayment] = useState(selectedPaymentFromState || null);

  // ✅ อัปเดต payment เมื่อกลับมาจากหน้า Payments.jsx
  useEffect(() => {
    if (selectedPaymentFromState) {
      setSelectedPayment(selectedPaymentFromState);
    }
  }, [selectedPaymentFromState]);

  const handleToggleRide = (ride) => {
    setSelectedRides((prev) =>
      prev.includes(ride.id)
        ? prev.filter((id) => id !== ride.id)
        : [...prev, ride.id]
    );
  };

  const handleConfirmRide = () => {
    if (selectedRides.length > 0) {
      const selectedRideObjects = fakeRides.filter((r) =>
        selectedRides.includes(r.id)
      );
      navigate("/ride/ProcessDriver", {
        state: { rides: selectedRideObjects, destination, selectedPayment },
      });
    } else {
      alert("Please select at least one ride!");
    }
  };

  return (
    <Box sx={{}}>
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

      {/* Ride List */}
      <Box
        sx={{
          backgroundColor: "white",
          borderRadius: 3,
          p: 2,
          boxShadow: 2,
          mt: "auto",
          display: "flex",
          flexDirection: "column",
          gap: 1.5,
          
        }}
      >
        <Typography
          variant="subtitle1"
          sx={{
            fontWeight: "bold",
            mb: 1,
            textAlign: "center",
            fontSize: 20,
          }}
        >
          Choose your ride
        </Typography>

        {fakeRides.map((ride) => {
          const isSelected = selectedRides.includes(ride.id);
          return (
            <Box
              key={ride.id}
              onClick={() => handleToggleRide(ride)}
              sx={{
                display: "flex",
                flexDirection: "column",
                backgroundColor: isSelected ? "#FFF3C4" : "#F9F9F9",
                borderRadius: 2,
                p: 1.5,
                border: isSelected
                  ? "2px solid #ECBD35"
                  : "1px solid #ddd",
                cursor: "pointer",
                "&:hover": { backgroundColor: "#FFF8DC" },
              }}
            >
              {/* Top row: image + name + price + passengers */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <img
                    src={ride.image}
                    alt={ride.name}
                    style={{
                      width: 70,
                      height: 40,
                      borderRadius: 8,
                      objectFit: "cover",
                    }}
                  />
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <Typography sx={{ fontWeight: "bold", fontSize: 16 }}>
                      {ride.name}
                    </Typography>
                    <Typography sx={{ fontSize: 14 }}>
                      ฿{ride.price}
                    </Typography>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 0.3 }}>
                      <Box
                        sx={{
                          width: 8,
                          height: 8,
                          borderRadius: "50%",
                          backgroundColor: "#55ff96ff",
                        }}
                      />
                      <PersonIconSmall sx={{ fontSize: 15, color: "#555" }} />
                      <Typography sx={{ fontSize: 12, color: "#555" }}>
                        {ride.passengers}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
                {isSelected ? (
                  <CheckBoxIcon sx={{ color: "#ECBD35", fontSize: 28 }} />
                ) : (
                  <CheckBoxOutlineBlankIcon
                    sx={{ color: "#ECBD35", fontSize: 28 }}
                  />
                )}
              </Box>

              {/* Bottom row: distance */}
              <Typography
                sx={{
                  fontSize: 10,
                  color: "#555",
                  ml: 10,
                  mt: 0.5,
                }}
              >
                Distance to destination: {ride.distance}
              </Typography>
            </Box>
          );
        })}

        {/* Payment Box */}
        <Box
          onClick={() =>
            navigate("/payments", { state: { fromChooseride: true } })
          }
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            border: "1px solid #ddd",
            borderRadius: 2,
            px: 1,
            py: 0.5,
            width: 310,
            mt: 1,
            backgroundColor: "#f9f9f9",
            cursor: "pointer",
            "&:hover": { backgroundColor: "#f0f0f0" },
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
                <KeyboardArrowRightIcon
                  sx={{ fontSize: 16, color: "#555" }}
                />
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

        {/* Confirm Button */}
        <Box
          onClick={handleConfirmRide}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#ECBD35",
            borderRadius: 1,
            cursor: "pointer",
            height: 35,
            "&:hover": { backgroundColor: "#d3a32e" },
            mt: 2,
          }}
        >
          <Typography sx={{ fontWeight: "bold", color: "#000000ff" }}>
            Confirm
          </Typography>
        </Box>
      </Box>
    </Box></Box>
  );
};

export default Chooseride;
