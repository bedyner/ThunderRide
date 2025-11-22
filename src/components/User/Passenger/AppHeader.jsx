import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useNavigate } from "react-router-dom";

const AppHeader = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = React.useState(false);

  const handleUserClick = async () => {
    try {
      const response = await fetch("https://your-api.com/api/user");
      if (!response.ok)
        throw new Error(`HTTP error! status: ${response.status}`);
      const data = await response.json();
      console.log("User data:", data);
      navigate("/profile");
    } catch (error) {
      console.error("Failed to fetch user data:", error);
    }
  };

  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
  };

  // ปุ่มเมนูอื่น ๆ
  // const menuItems = ["Earn", "Profile", "About", "Help"];

  return (
    <>
      {/* 🔶 Header Bar */}
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ backgroundColor: "#ECBD35" }}>
          <Toolbar sx={{ minHeight: 80 }}>
            {/* โลโก้ */}
            <Typography
              variant="h6"
              sx={{
                flexGrow: 1,
                fontWeight: "bold",
                display: "flex",
                alignItems: "center",
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

            {/* ปุ่ม USER */}
            <Button
              variant="outlined"
              onClick={handleUserClick}
              sx={{
                color: "black",
                borderColor: "white",
                borderRadius: "20px",
                backgroundColor: "white",
                textTransform: "none",
                fontWeight: "bold",
                px: 2,
                py: 0.5,
              }}
            >
              USER
            </Button>

            {/* ปุ่ม Toggle เมนู */}
            <IconButton
              size="large"
              edge="end"
              aria-label="menu"
              sx={{ ml: 1, color: "black" }}
              onClick={handleMenuToggle}
            >
              {showMenu ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>

      {/* 🔽 Slide Menu */}
      <Slide direction="down" in={showMenu} mountOnEnter unmountOnExit>
        <Box
          sx={{
            position: "absolute",
            top: 80,
            left: 0,
            width: "100%",
            height: "calc(100vh - 80px)",
            backgroundColor: "#f7f7f7",
            p: 3,
            zIndex: 999,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              pl: 1.25,
              gap: 1.5,
            }}
          >
            {/* Ride + Notification */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <Button
                variant="text"
                disableRipple
                sx={{
                  color: "black",
                  fontSize: "25px", // ปรับขนาดใหญ่ขึ้น
                  fontWeight: 700, // ปรับให้เข้มขึ้น
                  textTransform: "none",
                  justifyContent: "flex-start",
                }}
                onClick={() => {
                  setShowMenu(false);
                  navigate("/ride");
                }}
              >
                Ride
              </Button>

              <IconButton
                size="medium" // ทำให้ปุ่มใหญ่ขึ้น
                sx={{
                  // bgcolor: "#ffff",
                  color: "#ECBD35", // ไอคอนสีเหลือง
                  pr: 1.25,
                  
                }}
                onClick={() => {
                  setShowMenu(false);
                  navigate("/notifications");
                }}
              >
                <NotificationsIcon sx={{ fontSize: 25 }} /> {/* ขนาดไอคอนปรับเองได้ */}
                {/* ปรับขนาดไอคอน */}
              </IconButton>
            </Box>

            <Button
                variant="text"
                disableRipple
                sx={{
                  color: "black",
                  fontSize: "25px", // ปรับขนาดใหญ่ขึ้น
                  fontWeight: 700, // ปรับให้เข้มขึ้น
                  textTransform: "none",
                  justifyContent: "flex-start",
                }}
                onClick={() => {
                  setShowMenu(false);
                  navigate("/earn");
                }}
              >
                Earn
              </Button>

              <Button
                variant="text"
                disableRipple
                sx={{
                  color: "black",
                  fontSize: "25px", // ปรับขนาดใหญ่ขึ้น
                  fontWeight: 700, // ปรับให้เข้มขึ้น
                  textTransform: "none",
                  justifyContent: "flex-start",
                }}
                onClick={() => {
                  setShowMenu(false);
                  navigate("/profile");
                }}
              >
                Profile
              </Button>

              <Button
                variant="text"
                disableRipple
                sx={{
                  color: "black",
                  fontSize: "25px", // ปรับขนาดใหญ่ขึ้น
                  fontWeight: 700, // ปรับให้เข้มขึ้น
                  textTransform: "none",
                  justifyContent: "flex-start",
                }}
                onClick={() => {
                  setShowMenu(false);
                  navigate("/about");
                }}
              >
                About
              </Button>

              <Button
                variant="text"
                disableRipple
                sx={{
                  color: "black",
                  fontSize: "25px", // ปรับขนาดใหญ่ขึ้น
                  fontWeight: 700, // ปรับให้เข้มขึ้น
                  textTransform: "none",
                  justifyContent: "flex-start",
                }}
                onClick={() => {
                  setShowMenu(false);
                  navigate("/help");
                }}
              >
                Help
              </Button>
            {/* ปุ่มเมนูอื่น ๆ
            {menuItems.map((item) => (
              <Button
                key={item}
                variant="text"
                disableRipple
                sx={{
                  color: "black",
                  fontSize: "25px", // ปรับขนาดใหญ่ขึ้น
                  fontWeight: 700, // ปรับให้เข้มขึ้น
                  textTransform: "none",
                  justifyContent: "flex-start",
                  width: "100%",
                  pr: 1.25,
                  "&:hover": { backgroundColor: "#eaeaea" },
                }}
                onClick={() => {
                  setShowMenu(false);
                  navigate(`/${item.toLowerCase()}`);
                }}
              >
                {item}
              </Button>
            ))} */}
          </Box>
        </Box>
      </Slide>
    </>
  );
};

export default AppHeader;
